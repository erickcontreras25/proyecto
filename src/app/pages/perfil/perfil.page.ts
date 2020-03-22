import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Reservacion } from 'src/models/reservacion.models';
import { Equipo } from 'src/models/equipo.models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idUsuario;
  idReser;
  nombreUsu;
  perfiles: Usuario[] = [];
  reservaciones: Reservacion[] =[];

  equipos: Equipo[] = [];
  idEquipo;


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
      this.idUsuario = this.apiServi.getAuxUsu();

      this.apiServi.getUsuarioId(this.idUsuario)
      .subscribe( (resp: Usuario) => {
        this.perfil = resp;
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

  obtenerReservacion() {
    this.apiServi.getReservacion(this.idUsuario)
    .subscribe((resp: Reservacion[]) => {
      this.reservaciones = resp;
      console.log('EL SERVICIO SI SIRVE', resp);
    });
  }

  eliminarReservacion(rese: number) {
    this.apiServi.deleteReservacion(rese)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }

  obtenerEquipoUsuario() {
    this.apiServi.getEquipoUsuario(this.idUsuario)
    .subscribe( (resp: Equipo[]) => {
      this.equipos = resp;
      console.log('EJECUTADO CON EXITO');
    });
  }

}
