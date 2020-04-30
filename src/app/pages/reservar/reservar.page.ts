import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservacion } from 'src/models/reservacion.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { IonSlides, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Usuario } from 'src/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/models/user.models';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  nombre: string;
  seleccion: number;
  
  complejosAbiertos: Complejo[];
  canchas: Cancha[];
  aux = false;
  auxReser = false;
  auxHoras;

  complejos: Complejo[];
  complejo = {
    idComplejo: 0,
    nombre: '',
    localidad: '',
    foto: null,
    estado: false,
    longitud: 0,
    latitud: 0,
    horaInicio: new Date(),
    horaCierre: new Date(),
    userId: ''
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
    pago: false,
    idCancha: 0,
    userId: ''
  };


  perfil: User;

  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.reservacion.userId = this.perfil.id;
    console.log('ESTE ES EL ID OBTENIDO > > ' + this.reservacion.userId);


    this.obtenerComplejos();

    this.obtenerComplejoEstado();


  }


  // ---------------METODOS COMPLEJO------------------------------------------------
  obtenerComplejos() {
    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO ', resp);
    });
  }

  obtenerComplejoEstado() {
    this.apiServi.getComplejoEstado(true)
    .subscribe((resp: Complejo[]) => {
      this.complejosAbiertos = resp;
    });
  }

  obtenerComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      console.log(this.complejo);
    });
  }


  // ----------------------METODOS RESERVAR-----------------------------------
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
        pago: false,
        idCancha: 0,
        userId: ''
      };
      this.alertaService.alertaInformativa('Su reserva se realizo con exito. \n Puede verla ingresando a su Mi Perfil en Mis Reservas');
      this.navCtrl.navigateRoot('/inicio');
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
        pago: false,
        idCancha: 0,
        userId: ''
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



  volver() {
    this.auxReser = false;
  }



  // ----------------------------METODOS CANCHAS-----------------------------------
  obtenerCanchasComplejo(id: number) {
    this.apiServi.getCanchaComplejo(id)
    .subscribe((resp: Cancha[]) => {
      this.canchas = resp;
      // console.log('CANCHAS ', this.canchas);
    });
  }
  obtenerCanchaId(id: number) {
    this.apiServi.getCanchaId(id)
    .subscribe((resp: Cancha) => {
      this.canchaId = resp;
      this.reservacion.idCancha = this.canchaId.idCancha;
    });
  }


  obtenerReservas(id: number) {
    this.apiServi.getReservacionCancha(id)
    .subscribe((resp: Reservacion[]) => {
      this.reser = resp;
      console.log(this.reser);
    });
  }

  obtenerReservaciones() {
    this.validarFecha();
  }
  validarFecha() {

    const ini = moment().format('MM-DD-YYYY H:mm');

    const dInicial = moment(this.reservacion.horaInicial).format('MM-DD-YYYY H:mm');
    const dFinal = moment(this.reservacion.horaFinal).format('MM-DD-YYYY H:mm');

    const abre = moment(this.reservacion.horaInicial).format('HH');
    const cierra = moment(this.reservacion.horaFinal).format('HH');
    const abreComplejo = moment(this.complejo.horaInicio).format('HH');
    const cierraComplejo = moment(this.complejo.horaCierre).format('HH');

    if (dInicial <= ini || dFinal <= ini) {
      return alert('La hora inicial o final no puede ser menor que la hora actual');
    }

    if (dInicial === dFinal) {
      return alert('La hora final no puede ser igual que la inicial');
    }

    if (abre < abreComplejo || cierra > cierraComplejo) {
      return alert('Solo puede reservar en horario que permite el complejo');
    }

    for (let i = 0; i < this.reser.length; i++) {
      const fechInicial = moment(this.reser[i].horaInicial).format('MM-DD-YYYY H:mm');
      const fechFinal = moment(this.reser[i].horaFinal).format('MM-DD-YYYY H:mm');

      if (dInicial > fechInicial && dInicial < fechFinal || dFinal > fechInicial && dFinal < fechFinal) {
        return alert('El horario de ' + fechInicial + ' a ' + fechFinal + ' no esta disponible');
      }

      if (dInicial === fechInicial || dFinal === fechFinal) {
        this.auxReser = false;
        return alert('Este horario no esta disponible');
      }

    }
    const inic = moment(this.reservacion.horaInicial);
    const fin = moment(this.reservacion.horaFinal);
    this.auxHoras = fin.diff(inic, 'hours');
    this.auxReser = true;
    return alert('Horario disponible');
  }




  // -------------------------------METODOS OBTENER------------------
idCancha(id: number) {
  this.reservacion.idCancha = id;
}
// precioCancha(precio: number) {
//   this.seleccion = precio;
// }
// nombreComplejo(nombre: string) {
//   this.complejo.nombre = nombre;
// }
// localidadComplejo(local: string) {
//   this.complejo.localidad = local;
// }
obtenerComplejo(id: number) {
  this.obtenerComplejoId(id);
}
obtenerCancha(id: number) {
  this.obtenerCanchaId(id);
  this.obtenerReservas(id);
}
llenar() {
  this.reservacion.idCancha = this.canchaId.idCancha;
}




// -------------------------------------------------SLIDE--------------------------------
goComplejos() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goCancha() {
  this.auxReser = false;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}

goHorarios() {
  // this.obtenerReservas();
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
