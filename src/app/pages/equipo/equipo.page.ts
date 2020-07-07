import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipo } from 'src/models/equipo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { NavController, IonSlides, AlertController, ActionSheetController } from '@ionic/angular';
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

  equipo: Equipo = new Equipo(0, '', null, '');
  equiposCap: Equipo[] = [];
  mostrarEIncomp: Equipo[] = [];
  equiposMiembro: Equipo[] = [];
  equipos: Equipo[] = [];

  equipoUser: EquipoUser = new EquipoUser(0, '');
  equipoUsers: EquipoUser[] = [];
  idEquipoUser: EquipoUser[] = [];
  
  equipoUserUser: EquipoUser[] = [];

  idEquipo;
  mostrarCrear = false;
  ver = false;
  aux;
  atras = false;

  perfil: User;

  constructor(private usuarioService: UsuarioService,
              private equipoService: EquipoService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              private alertController: AlertController,
              public actionSheetController: ActionSheetController) { }

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

// -----------------------------------------------METODOS EQUIPO--------------------------------------------
  obtenerTodosEquipos() {
    this.equipoService.getEquipos()
      .subscribe((resp: Equipo[]) => {
        this.equipos = resp;
      });
  }

  obtenerEquipoId(id: number) {
    this.equipoService.getEquipoId(id)
    .subscribe((resp: Equipo) => {
      this.equipo = resp;
      // console.log(this.equipo);
    });
  }

  obtenerEquipoxUser() {
    this.equipoService.getEquipoxUsuario(this.perfil.id)
    .subscribe((resp: Equipo[]) => {
      this.equiposCap = resp;
      this.verificarCompleto();
    });
  }

  crearEquipo() {
    this.equipo.userId = this.perfil.id;
    this.equipoService.postEquipo(this.equipo)
    .subscribe(data => {
      this.clear();
      this.alertaService.alertaInformativa('Equipo creado. \n Ahora solo tienes que dar click en completar creacion.');
      this.obtenerEquipoxUser();
      this.obtenerEquipoUserxIduser();
      this.mostrarCrear = false;
    },
    (error) => {
      console.log(error);
    });
  }

  cambiarCapitan(user: string) {
    this.equipo.userId = user;
    this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo)
    .subscribe(data => {
      // this.clear();
      this.alertaService.alertaInformativa('Actualizado!!');
      this.obtenerEquipoxUser();
      this.obtenerEquipoUserxIduser();
      // this.goSlide1();
    },
    (error) => {
      console.log(error);
    });
  }
  modificarEquipo() {
    this.equipoService.putEquipo(this.equipo.idEquipo, this.equipo)
    .subscribe(data => {
      // this.clear();
      this.aux = null;
      this.alertaService.alertaInformativa('Actualizado!!');
      this.obtenerEquipoxUser();
      this.obtenerEquipoUserxIduser();
      // this.goSlide1();
    },
    (error) => {
      this.equipo.cantJugadores = this.aux;
      console.log(error['error']);
      this.alertaService.alertaInformativa(error['error']);
    });
  }


// ----------------------------------------------- --------------------------------------------------

  async actualizar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actualizar',
      buttons: [{
        text: 'Cantidad de Jugadores a admitir',
        icon: 'people',
        cssClass: 'azul',
        handler: () => {
          this.presentAlertPrompt();
        }
      }, {
        text: 'Nombre del equipo',
        icon: 'receipt',
        cssClass: 'morado',
        handler: () => {
          this.actualizarNombre();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async actualizarCapitan(id: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Sacar del equipo',
        icon: 'person-remove',
        cssClass: 'rojo',
        handler: () => {
          this.sacarEquipo(id);
        }
      }, {
        text: 'Elegir como nuevo capitán',
        icon: 'shield-checkmark',
        cssClass: 'verde',
        handler: () => {
          this.cambiarCapitan(id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Aumenta o disminuye la cantidad de jugadores que quieres que tenga el equipo.',
      message: '<strong>Actualmente el máximo de jugadores es de ' + this.equipo.cantJugadores + ' </strong>',
      inputs: [
        {
          name: 'cantJugadores',
          type: 'number',
          min: 0,
          max: 2000
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            this.aux = this.equipo.cantJugadores;
            this.equipo.cantJugadores = data.cantJugadores;
            this.modificarEquipo();
          }
        }
      ]
    });

    await alert.present();
  }


  async actualizarNombre() {
    const alert = await this.alertController.create({
      header: 'Cambiale el nombre al equipo',
      message: '<strong>Actualmente se llama ' + this.equipo.nombre + ' </strong>',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
        }
      ], buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: data => {
            this.equipo.nombre = data.nombre;
            this.modificarEquipo();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

// -----------------------------------------------METODOS EQUIPO-USER--------------------------------------------

  verificarCompleto() {
    let aux = 0;
    for (let i = 0; i < this.equiposCap.length; i++) {
      // this.obtenerEquipoUserId(this.equiposCap[i].idEquipo);

      this.equipoService.getEquipoUserId(this.equiposCap[i].idEquipo)
    .subscribe((resp: EquipoUser[]) => {
      this.idEquipoUser = resp;
      if (this.idEquipoUser.length < 1) {
        this.mostrarEIncomp[aux] = this.equiposCap[i];
        this.idEquipoUser = [];
        aux = aux + 1;
      }
    });
      // console.log(this.mostrarEIncomp);
    }
  }
  obtenerEquipoUserId(id: number) {
    this.equipoService.getEquipoUserId(id)
    .subscribe((resp: EquipoUser[]) => {
      this.idEquipoUser = resp;
      // this.goSlide2();
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

  getEquipoUserxIdEquipo(id: number) {
    this.equipoService.getEquipoUserId(id)
    .subscribe((resp: EquipoUser[]) => {
      this.equipoUsers = resp;
      this.goSlide2();
    },
    (error) => {
      console.log(error);
    });
  }

  uniraEquipo(id: string) {
    this.equipoUser.userId = this.perfil.id;
    this.equipoUser.equipoId = id;
    this.equipoService.postEquipoUser(this.equipoUser)
    .subscribe(data => {
      // this.equipoUsers.push(this.equipoUser);
      this.alertaService.alertaInformativa('Creacion completada.');
      this.mostrarEIncomp = [];
      this.obtenerEquipoxUser();
      this.obtenerEquipoUserxIduser();
    },
    (error) => {
      console.log(error['error']);
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
      this.getEquipoUserxIdEquipo(this.equipoUser.equipoId);
    },
    error => console.log(error));
  }


// ----------------------------------------------- --------------------------------------------------
  llenar(id: number) {
    this.equipoUser.equipoId = id;
  }

  ocultar() {
    this.equipoUsers = [];
  }

  clear() {
    this.equipo = new Equipo(0, '', 0, '');
  }




  // -----------------------------------------------------------SLIDE---------------------------------------------
goSlide1() {
  this.clear();
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goSlide2() {
  this.atras = true;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}
goSlide3() {
  this.atras = true;
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}

slideAtras() {
  this.slides.lockSwipes(false);
  this.slides.slidePrev();
  this.slides.lockSwipes(true);
  this.clear();
  this.slides.isBeginning().then(data => {
    if (data === true) {
      this.atras = false;
    }
  });
}


}
