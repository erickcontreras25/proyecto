import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.page.html',
  styleUrls: ['./crear-equipo.page.scss'],
})
export class CrearEquipoPage implements OnInit {

  equipo = {
    nombreEquipo: '',
    agregarMienbro: ''
  };

  constructor() { }

  ngOnInit() {
  }

  crearEquipo(){
    console.log("EQUIPO CREADO");
  }

}
