import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.page.html',
  styleUrls: ['./crear-perfil.page.scss'],
})
export class CrearPerfilPage implements OnInit {

  perfil = {
    nombre: '',
    edad: 0,
    equipo: ''
  };

  constructor() { }

  ngOnInit() {
  }

  crearPerfil(){
    console.log("PERFIL CREADO");
  }

}
