import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Usuario } from 'src/models/usuario.models';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.page.html',
  styleUrls: ['./crear-perfil.page.scss'],
})
export class CrearPerfilPage implements OnInit {

  perfiles: Usuario[] = [];

  idUsuario;
  perfil = {
    nombre: '',
    nombreUsuario: '',
    edad: 0,
    email: '',
    password: '',
    rol: false
  };

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
  }



  obtenerUsuario() {
    this.apiServi.getUsuario()
    .subscribe((resp: Usuario[]) => {
      this.perfiles = resp;
      console.log('SERVICIO', resp);
    });
  }

  obtenerUsuarioId() {
    this.apiServi.getUsuarioId(this.idUsuario)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }

  agregarUsuario() {
    this.apiServi.postUsuario(this.perfil)
    .subscribe((data) => {
      this.perfiles.push(this.perfil);
      this.perfil = {
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
    this.apiServi.putUsuario(this.idUsuario, this.perfil)
    .subscribe((data) => {
      this.perfiles.push(this.perfil);
      this.perfil = {
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

  eliminarUsuario() {
    this.apiServi.deleteUsuario(this.idUsuario)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }



}
