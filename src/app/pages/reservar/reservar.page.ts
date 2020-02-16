import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  nombre: string;

  reservacion = {
    nombreComplejo: '',
    cantCanchas: 0,
    hDisponible: Date,
    precio: 0
  };

  constructor() { }

  ngOnInit() {
  }

  crearReservacion() {
    console.log("HOLA");
  }

}
