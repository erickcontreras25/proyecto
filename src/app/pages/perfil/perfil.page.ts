import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Reservacion } from 'src/models/reservacion.models';
import { Equipo } from 'src/models/equipo.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/models/user.models';
import { Cancha } from 'src/models/cancha.models';
import { Complejo } from 'src/models/complejo.models';
import * as moment from 'moment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idUsuario;
  idReser;
  nombreUsu;
  reservaciones: Reservacion[] = [];

  reservacionesNoVencidas: Reservacion[] = [];

  cancha: Cancha;
  complejo: Complejo;

  equipos: Equipo[] = [];
  idEquipo;

  // perfil: User;

  private user = {
    id: '',
    email: '',
    nombreUsuario: '',
    edad: 0,
    isAdmin: false
  };



  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.user = this.usuarioService.getUsuario();
    console.log(this.user);

  }

  // agregarUsuario() {
  //   this.apiServi.postUsuario(this.perfil)
  //   .subscribe((data) => {
  //     this.perfiles.push(this.perfil);
  //     this.perfil = {
  //       nombreUsuario: null,
  //       edad: null,
  //       email: null,
  //       password: null,
  //       rol: false
  //     };
  //     window.alert('AGREGADO');
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  // }
  // modificarUsuario() {
  //   this.apiServi.putUsuario(this.idUsuario, this.perfil)
  //   .subscribe((data) => {
  //     this.perfiles.push(this.perfil);
  //     this.perfil = {
  //       nombreUsuario: null,
  //       edad: null,
  //       email: null,
  //       password: null,
  //       rol: false
  //     };
  //     window.alert('ACTUALIZADO CON EXITO');
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  // }
  obtenerMisReservacion() {
    this.apiServi.getReservacionXUser(this.user.id)
    .subscribe((resp: Reservacion[]) => {
      this.reservaciones = resp;
      console.log('SERVICIO', resp);
      this.noVencidas();
    });
  }
  eliminarReservacion(rese: number) {
    this.apiServi.deleteReservacion(rese)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }
  // obtenerEquipoUsuario() {
  //   this.apiServi.getEquipoUsuario(this.idUsuario)
  //   .subscribe( (resp: Equipo[]) => {
  //     this.equipos = resp;
  //     console.log('EJECUTADO CON EXITO');
  //   });
  // }

  noVencidas() {

    const ini = moment().format('MM-DD-YYYY H');
    let valor = 0;

    for (let i = 0; i < this.reservaciones.length; i++) {

      const val = moment(this.reservaciones[i].horaFinal).format('MM-DD-YYYY H');
      
      if (ini < val) {
        this.reservacionesNoVencidas[valor] = this.reservaciones[i];
        valor++;
      }
      
    }
  }
  

}
