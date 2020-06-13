import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, IonSlides, AlertController } from '@ionic/angular';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { Torneo } from 'src/models/torneo.models';
import { TorneoService } from 'src/app/services/torneo.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import * as moment from 'moment';
import { TorneoEquipo } from 'src/models/torneoEquipo.models';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  complejos: Complejo[] = [];
  complejo: Complejo = new Complejo(0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);

  torneoUser: Torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  torneos: Torneo[] = [];
  torneosxUser: Torneo[] = [];

  equipoxTorneo: TorneoEquipo[] = [];
  torneoEquipo: TorneoEquipo = new TorneoEquipo(0, 0);

  mostrarCrear = false;

  hoy;
  ver = false;
  mE = false;
  atras = false;
  mD = false;


  perfil: User;

  constructor(public actionSheetController: ActionSheetController,
              private usuarioService: UsuarioService,
              private apiServi: ApiserviService,
              private torneoService: TorneoService,
              private alertaService: AlertaServiceService,
              private navCtrl: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.obtenerComplejos();
    this.getTorneoxUser();
  }



  // -------------------------------------------METODOS TORNEO---------------------------------------


  getTorneoxUser() {
    this.torneoService.getTorneoxUsuario(this.perfil.id)
    .subscribe((resp: Torneo[]) => {
      this.torneosxUser = resp;
      // console.log(resp);
    });
  }

  getTorneoId(id: number) {
    this.torneoService.getTorneooId(id)
    .subscribe( (resp: Torneo) => {
      this.torneoUser = resp;
      this.getEquipoxTorneo(id);
      this.validar();
      this.goSlide2();
    });
  }

  validar() {
    this.hoy = moment().format('YYYY-MM-DD');
    const dia = moment(this.torneoUser.diaTorneo).format('YYYY-MM-DD');
    if (dia <= this.hoy) {
      this.ver = true;
    }
  }

  modificarTorneoConImagen() {
    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];

    const imgPromise = this.getFileBlob(file);

    imgPromise.then(blob => {
      this.torneoUser.premioFoto = blob;
      // console.log("ESTE ES MI BLOB: " + blob);

      this.modificarTorneo();

    });
  }

  modificarTorneo() {
    this.torneoService.putTorneo(this.torneoUser.idTorneo, this.torneoUser)
    .subscribe(data => {
      // this.clea();
      // this.goSlide1();
      this.alertaService.alertaInformativa('Actualizado');
      this.obtenerComplejos();
      this.getTorneoxUser();
    },
    (error) => {
      console.log(error['error']);
      this.alertaService.alertaInformativa(error['error']);
    });
  }


  getFileBlob(file) {
    const reader = new FileReader();
    return new Promise(function(resolve, reject) {

      reader.onload = (function(theFile) {
        return function(e) {
          resolve(e.target.result);
        };
      })(file);

      reader.readAsDataURL(file);

    });
  }


  clea() {
    this.torneoUser = new Torneo(0, '', null, '', '', new Date(), '', 0);
  }


  // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------

  getEquipoxTorneo(id: number) {
    this.torneoService.getTorneoEquipoId(id)
    .subscribe((resp: TorneoEquipo[]) => {
       this.equipoxTorneo = resp;
      //  this.goSlide3();
    },
    error => {
      console.log(error);
    });
  }


  sacardTorneo(idT: number, idE: number) {
    this.torneoService.deleteTorneoEquipo(idT, idE)
    .subscribe( resp => {
      this.alertaService.alertaInformativa('Equipo eliminado con exito!!');
      this.getEquipoxTorneo(this.torneoUser.idTorneo);
    });
  }

  // --------------------------------------------METODOS COMPLEJOS------------------------------------
  obtenerComplejos() {
    this.apiServi.getComplejoAdmin(this.perfil.id)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
    });
  }



  mostrarDel() {
    this.hoy = moment().format('YYYY-MM-DD');
    const d = moment(this.torneoUser.diaTorneo).format('YYYY-MM-DD');
    if (d >= this.hoy) {
      this.mE = true;
    } else {
      this.mE = false;
    }
    this.goSlide3();
  }


// -------------------------------------------------------------------------------------------------------
  async actualizar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actualizar',
      buttons: [{
        text: 'Cantidad de equipos a admitir',
        icon: 'people',
        cssClass: 'azul',
        handler: () => {
          this.actualizarCantidad();
        }
      }, {
        text: 'Nombre del torneo',
        icon: 'receipt',
        cssClass: 'rojo',
        handler: () => {
          this.actualizarNombre();
        }
      }, {
        text: 'Día del torneo',
        icon: 'calendar',
        cssClass: 'verde',
        handler: () => {
          this.actualizarDiaT();
        }
      }, {
        text: 'Imagen',
        icon: 'camera-reverse',
        cssClass: 'morado',
        handler: () => {
          this.goSlide4();
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

  async actualizarCantidad() {
    const alert = await this.alertController.create({
      header: 'Aumenta o disminuye la cantidad de equipos que quieres que tenga el torneo.',
      message: '<strong>Actualmente el máximo de equipos es de: ' + this.torneoUser.cantEquipos + ' </strong>',
      inputs: [
        {
          name: 'cantEquipos',
          type: 'number',
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
            if (data.cantEquipos < this.equipoxTorneo.length) {
              return this.alertaService.alertaInformativa('La cantidad de cupos admitidos no puede ser menor que los equipos inscritos.');
            } else {
              console.log('Confirm Ok');
              this.torneoUser.cantEquipos = data.cantEquipos;
              this.modificarTorneo();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async actualizarNombre() {
    const alert = await this.alertController.create({
      header: 'Cambiale el nombre al torneo',
      message: '<strong>Actualmente se llama: ' + this.torneoUser.nombre + ' </strong>',
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
            if (data.nombre.length < 5) {
              return this.alertaService.alertaInformativa('El nombre debe tener mas de 5 caracteres');
            } else {
              this.torneoUser.nombre = data.nombre;
              this.modificarTorneo();
              console.log('Confirm Okay');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async actualizarDiaT() {
    const alert = await this.alertController.create({
      header: 'Cambia el día del torneo',
      message: '<strong>Actualmente el día que se llevará a cabo es: '+ moment(this.torneoUser.diaTorneo).format('DD-MM-YYYY') +'</strong>',
      inputs: [
        {
          name: 'diaTorneo',
          type: 'date',
          min: this.hoy,
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
            this.torneoUser.diaTorneo = data.diaTorneo;
            this.modificarTorneo();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }






    // -------------------------------------------------SLIDE--------------------------------
goSlide1() {
  this.clea();
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goSlide2() {
  this.atras = true;
  this.mD = false;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}

goSlide3() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}
goSlide4() {
  this.mD = true;
  this.slides.lockSwipes(false);
  this.slides.slideTo(3);
  this.slides.lockSwipes(true);
}

slideAtras() {
  this.slides.lockSwipes(false);
  this.slides.slidePrev();
  this.slides.lockSwipes(true);
  this.slides.isBeginning().then(data => {
    if (data === true) {
      this.atras = false;
    }
  });
}

}
