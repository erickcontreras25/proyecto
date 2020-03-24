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
  canchas: Cancha[];
  aux;

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
      console.log('EL SERVICIO SI SIRVE', resp);
    });
    this.reservacion.idUsuario = this.apiServi.getAuxUsu();

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
  obtenerCancha() {
    this.apiServi.getCancha(this.seleccion)
    .subscribe((resp: Cancha[]) => {
      this.canchas = resp;
      console.log('CANCHAS ', this.canchas);
    });
  }


}
