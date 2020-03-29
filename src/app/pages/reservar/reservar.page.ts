import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/models/reservacion.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  nombre: string;
  seleccion: number;
  complejos: Complejo[];
  complejosAbiertos: Complejo[];
  canchas: Cancha[];
  aux = false;

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

  reservacion = {
    idReservacion: 0,
    horaInicial: new Date(),
    horaFinal: new Date(),
    idCancha: 0,
    idUsuario: 0
  };

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
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
  obtenerCancha() {
    this.apiServi.getCancha(this.seleccion)
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


}
