import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipo } from 'src/models/equipo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { NavController, IonSlides } from '@ionic/angular';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { Usuario } from 'src/models/usuario.models';
import { User } from 'src/models/user.models';
import { EquipoUser } from 'src/models/equipoUser.models';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  equipo: Equipo = new Equipo(0, '', '');
  equiposCap: Equipo[] = [];
  equiposMiembro: Equipo[] = [];
  equipos: Equipo[] = [];

  equipoUser: EquipoUser = new EquipoUser(0, '');
  equipoUsers: EquipoUser[] = [];
  equipoUserUser: EquipoUser[] = [];

  idEquipo;
  mostrarCrear = false;
  unido = false;
  ver = false;

  perfil: User;

  constructor(private usuarioService: UsuarioService,
              private equipoService: EquipoService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.obtenerEquipoxUser();
    this.obtenerEquipoUserxIduser();
  }



  // eliminarEquipo() {
  //   this.apiServi.deleteEquipo(this.idEquipo)
  //   .subscribe( resp => {
  //     console.log('ELIMINADO CON EXITO');
  //   });
  // }

  obtenerTodosEquipos() {
    this.equipoService.getEquipos()
      .subscribe((resp: Equipo[]) => {
        this.equipos = resp;
        console.log('SERVICIO ', resp);
      });
  }

  obtenerEquipoId(id: number) {
    this.equipoService.getEquipoId(id)
    .subscribe((resp: Equipo) => {
      this.equipo = resp;
    });
  }

  obtenerEquipoxUser() {
    this.equipoService.getEquipoxUsuario(this.perfil.id)
    .subscribe((resp: Equipo[]) => {
      this.equiposCap = resp;
    });
  }

  crearEquipo() {
    this.equipo.userId = this.perfil.id;
    this.equipoService.postEquipo(this.equipo)
    .subscribe(data => {
      this.equipos.push(this.equipo);
      this.clear();
      this.alertaService.alertaInformativa('Para completar la creacion debes dar click en boton unirme a equipo');
      this.alertaService.alertaInformativa('Equipo creado');
      this.obtenerEquipoxUser();
      this.mostrarCrear = false;
    },
    (error) => {
      console.log(error);
    });
  }

  modificarEquipo() {
    this.equipoService.putEquipo(this.idEquipo, this.equipo)
    .subscribe(data => {
      this.clear();
      this.alertaService.alertaInformativa('Equipo modificado');
    },
    (error) => {
      console.log(error);
    });
  }

  // -----------------------------------------------METODOS PARA EQUIPO USUARIOS-----------------------------

  obtenerEquipoUserId(id: number) {
    this.equipoService.getEquipoUserId(id)
    .subscribe((resp: EquipoUser[]) => {
      this.equipoUsers = resp;
    },
    (error) => {
      console.log(error);
    });
  }

  obtenerEquipoUserxIduser() {
    this.equipoService.getEquipoUserxUsuario(this.perfil.id)
    .subscribe((resp: EquipoUser[]) => {
      this.equipoUserUser = resp;
    },
    (error) => {
      console.log(error);
    } );
  }

  uniraEquipo() {
    this.equipoUser.userId = this.perfil.id;
    this.equipoService.postEquipoUser(this.equipoUser)
    .subscribe(data => {
      this.equipoUsers.push(this.equipoUser);
      this.unido = true;
      this.obtenerEquipoUserxIduser();
    },
    (error) => {
      console.log(error);
    });
  }

  salirEquipo(id: number) {
    this.equipoUser.userId = this.perfil.id;
    this.equipoService.deleteEquipoUser(id, this.equipoUser.userId)
    .subscribe( resp => {
      this.alertaService.alertaInformativa('Hecho!!');
      this.obtenerEquipoUserxIduser();
      this.goSlide1();
    },
    error => console.log(error));
  }

  sacarEquipo(id: string) {
    this.equipoUser.equipoId = this.equipo.idEquipo;
    this.equipoService.deleteEquipoUser(this.equipoUser.equipoId, id)
    .subscribe( resp => {
      this.alertaService.alertaInformativa('Hecho!!');
      this.obtenerEquipoUserxIduser();
      this.obtenerEquipoUserId(this.equipoUser.equipoId);
    },
    error => console.log(error));
  }



  llenar(id: number) {
    this.equipoUser.equipoId = id;
  }

  ocultar() {
    this.equipoUsers = [];
  }

  clear() {
    this.equipo = new Equipo(0, '', '');
  }




  // -------------------------------------------------SLIDE--------------------------------
goSlide1() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goSlide2() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}
goSlide3() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}


}
