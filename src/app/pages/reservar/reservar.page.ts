import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/models/reservacion.models';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  nombre: string;

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
  }

  obtenerReservacion() {
    this.apiServi.getReservacion()
    .subscribe((resp: Reservacion[]) => {
      this.reservaciones = resp;
      console.log('EL SERVICIO SI SIRVE', resp);
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



}
