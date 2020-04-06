import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservacion } from 'src/models/reservacion.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  nombre: string;
  seleccion: number;
  complejos: Complejo[];
  complejosAbiertos: Complejo[];
  canchas: Cancha[];
  aux = false;
  auxReser = false;


  complejo = {
    idComplejo: 0,
    nombre: null,
    localidad: null,
    foto: null,
    estado: null,
    idAdmin: null
  };

  canchaId = {
    idCancha: 0,
    precio: null,
    foto: null,
    idComplejo: null
  };

  reservaciones: Reservacion[] = [];
  reser: Reservacion[] = [];

  reservacion = {
    idReservacion: 0,
    horaInicial: new Date(),
    horaFinal: new Date(),
    idCancha: 0,
    idUsuario: 0
  };

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {

    this.slides.lockSwipes(true);

    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO ', resp);
    });
    this.reservacion.idUsuario = this.apiServi.getAuxUsu();

    this.apiServi.getComplejoEstado(true)
    .subscribe((resp: Complejo[]) => {
      this.complejosAbiertos = resp;
    });


  }

  obtenerReservacionId() {
    this.apiServi.getReservacionId(this.reservacion.idReservacion)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }
  agregarReservacion() {
    this.apiServi.postReservacion(this.reservacion)
    .subscribe((data) => {
      this.reservaciones.push(this.reservacion);
      this.reservacion = {
        idReservacion: 0,
        horaInicial: new Date(),
        horaFinal: new Date(),
        idCancha: 0,
        idUsuario: 0
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log(error);
      window.alert('Ingrese los datos correctamente');
    }
    );
  }
  modificarReservacion() {
    this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion)
    .subscribe((data) => {
      this.reservaciones.push(this.reservacion);
      this.reservacion = {
        idReservacion: 0,
        horaInicial: new Date(),
        horaFinal: new Date(),
        idCancha: 0,
        idUsuario: 0
      };
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }
  eliminarReservacion() {
    this.apiServi.deleteReservacion(this.reservacion.idReservacion)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }

  // ----------------------------METODOS CANCHAS-----------------------------------
  obtenerCancha(id: number) {
    this.seleccion = id;
    this.apiServi.getCancha(id)
    .subscribe((resp: Cancha[]) => {
      this.canchas = resp;
      console.log('CANCHAS ', this.canchas);
    });
  }
  obtenerCanchaId() {
    this.apiServi.getCanchaId(this.reservacion.idCancha)
    .subscribe((resp: Cancha) => {
      this.canchaId = resp;
    });
  }


  obtenerReservas() {
    this.apiServi.getReservacionCancha(this.reservacion.idCancha)
    .subscribe((resp: Reservacion[]) => {
      this.reser = resp;
    });
  }
  obtenerReservaciones() {
    this.validarFecha();
  }
  validarFecha() {
    const inicial = new Date(this.reservacion.horaInicial);
    const dInicial = inicial.toUTCString();
    const final = new Date(this.reservacion.horaFinal);
    const dFinal = final.toUTCString();

    for (let i = 0; i < this.reser.length; i++) {
      const datInicial = new Date(this.reser[i].horaInicial);
      const fechInicial = datInicial.toUTCString();

      const datFinal = new Date(this.reser[i].horaFinal);
      const fechFinal = datFinal.toUTCString();

      if (dInicial === fechInicial || dFinal === fechFinal) {
        this.auxReser = false;
        return alert('Este horario no esta disponible');
      }
    }
    this.auxReser = true;
    return alert('Horario disponible');
  }



idCancha(id: number) {
  this.reservacion.idCancha = id;
}
precioCancha(precio: number) {
  this.seleccion = precio;
}
nombreComplejo(nombre: string) {
  this.complejo.nombre = nombre;
}
localidadComplejo(local: string) {
  this.complejo.localidad = local;
}

// -------------------------------------------------SLIDE--------------------------------
goComplejos() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goCancha() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}

goHorarios() {
  this.obtenerReservas();
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}

goReservar() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(3);
  this.slides.lockSwipes(true);
}


}
