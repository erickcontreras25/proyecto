import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario.models';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfiles: Usuario[] = [];

  perfil = {
    idUsuario: 0,
    nombre: '',
    nombreUsuario: '',
    edad: 0,
    email: '',
    password: '',
    rol: false
  };


  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
      this.apiServi.getUsuarioId(this.perfil.idUsuario)
      .subscribe( resp => {
        console.log('EJECUTADO CON EXITO');
      });
  }

  agregarUsuario() {
    this.apiServi.postUsuario(this.perfil)
    .subscribe((data) => {
      this.perfiles.push(this.perfil);
      this.perfil = {
        idUsuario: 0,
        nombre: '',
        nombreUsuario: '',
        edad: 0,
        email: '',
        password: '',
        rol: false
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log(error);
    }
    );
  }

  modificarUsuario() {
    this.apiServi.putUsuario(this.perfil.idUsuario, this.perfil)
    .subscribe((data) => {
      this.perfiles.push(this.perfil);
      this.perfil = {
        idUsuario: 0,
        nombre: '',
        nombreUsuario: '',
        edad: 0,
        email: '',
        password: '',
        rol: false
      };
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }


}
