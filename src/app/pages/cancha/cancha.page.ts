import { Component, OnInit, ViewChild } from '@angular/core';
import { Cancha } from 'src/models/cancha.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, IonSlides, AlertController, ActionSheetController } from '@ionic/angular';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.page.html',
  styleUrls: ['./cancha.page.scss'],
})
export class CanchaPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;


  canchas: Cancha[] = [];
  complejos: Complejo[] = [];

  idUsu;
  atras = false;

  cancha = new Cancha(0, null, null, '', null);
  complejo: Complejo = new Complejo(0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');

  perfil: User;


  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              public alertController: AlertController,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {

    this.slides.lockSwipes(true);

    this.perfil = this.usuarioService.getUsuario();

    this.obtenerComplejoAdmin(this.perfil.id);

  }


  obtenerComplejoAdmin(id: string) {
    this.apiServi.getComplejoAdmin(id)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO', resp);
    });
  }

  obtenerCanchaId() {
    this.apiServi.getCanchaId(this.cancha.idCancha)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }


  modificarCancha() {
    this.apiServi.putCancha(this.cancha.idCancha, this.cancha)
    .subscribe((data) => {
      // this.canchas.push(this.cancha);
      this.clean();
      this.obtenerCanchasComplejo(this.complejo.idComplejo);
      this.alertaService.alertaInformativa('Actualizado!!');
    },
    (error) => {
      console.log(error);
    }
    );
  }

  modificarCanchaFoto() {

    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];
    const imgPromise = this.getFileBlobCancha(file);

    imgPromise.then(blob => {
      this.cancha.foto = blob;

      this.modificarCancha();
  });
  }

  eliminarCancha() {
    this.apiServi.deleteCancha(this.cancha.idCancha)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }



  obtenerComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      this.obtenerCanchasComplejo(this.complejo.idComplejo);
    });
  }
  obtenerIdComplejo2(id: number) {
    this.cancha.idComplejo = id;
    // console.log('ESTE ES EL ID DEL COMPLEJO ' + this.cancha.idComplejo);
  }

  clean() {
    this.cancha = new Cancha(0, null, null, '', null);
  }
  clear() {
    this.complejo = new Complejo(0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
  }



  // --------------------------------------------METODOS CANCHAS--------------------------------------
  agregarCancha() {

    const fileInput: any = document.getElementById('imgCancha');
    const file = fileInput.files[0];
    const imgPromise = this.getFileBlobCancha(file);

    imgPromise.then(blob => {
      this.cancha.foto = blob;

      this.apiServi.postCancha(this.cancha)
    .subscribe((data) => {
      this.canchas.push(this.cancha);
      this.cancha = new Cancha(0, null, null, '', null);
      this.alertaService.alertaInformativa('Cancha agregada');
      this.navCtrl.navigateRoot('/inicio');
    },
    (error) => {
      console.log(error);
    }
    );
    });
  }

  obtenerCanchasComplejo(id: number) {
    this.apiServi.getCanchaComplejo(id)
    .subscribe((resp: Cancha[]) => {
      this.canchas = resp;
      this.goSlideVerCancha();
    });
  }

  getCanchaId(id: number) {
    this.apiServi.getCanchaId(id)
    .subscribe((resp: Cancha) => {
      this.cancha = resp;
      this.presentActionSheet();
      console.log(this.cancha);
    },
    error => console.log(error));
  }

  idCancha(id: number) {
    this.cancha.idCancha = id;
  }

  getFileBlobCancha(file) {
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

// ------------------------------------------------ALERT CONTROLLER-------------------------------------
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actualizar',
      buttons: [{
        text: 'Precio',
        icon: 'cash',
        cssClass: 'verde',
        handler: () => {
          this.presentAlertPrompt();
        }
      }, {
        text: 'Tamanio cancha',
        icon: 'file-tray',
        cssClass: 'azul',
        handler: () => {
          this.tamanio();
        }
      }, {
        text: 'Imagen cancha',
        icon: 'camera-reverse',
        cssClass: 'morado',
        handler: () => {
          this.goSlideImagen();
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cambia el precio de la cancha!',
      message: '<strong>Cambiar</strong>??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Cambia el precio de la cancha!',
      message: '<strong>Precio actual: Lps.' + this.cancha.precio + ' </strong>',
      inputs: [
        {
          name: 'name',
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
            this.clean();
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            this.cancha.precio = data.name;
            this.modificarCancha();
          }
        }
      ]
    });

    await alert.present();
  }

  async tamanio() {
    const alert = await this.alertController.create({
      header: 'Cambiar tamanio',
      message: '<strong>Tamaño actual: ' + this.cancha.tamanioCancha + ' </strong>',
      buttons: [
        {
          text: 'Pequeña',
          handler: () => {
            this.cancha.tamanioCancha = 'Pequeña';
            this.modificarCancha();
            console.log('Confirm Okay');
          }
        }, {
          text: 'Mediana',
          handler: () => {
            this.cancha.tamanioCancha = 'Mediana';
            this.modificarCancha();
            console.log('Confirm Okay');
          }
        }, {
          text: 'Grande',
          handler: () => {
            this.cancha.tamanioCancha = 'Grande';
            this.modificarCancha();
            console.log('Confirm Okay');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.clean();
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }


// ---------------------------------------------------SLIDES--------------------------------------------

  goSlide1() {
    this.atras = false;
    this.clean();
    this.clear();
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  goSlideCancha() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  goSlideVerCancha() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  goSlideImagen() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }

}
