import { Component, OnInit, ViewChild } from '@angular/core';
import { Cancha } from 'src/models/cancha.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, IonSlides, AlertController } from '@ionic/angular';
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

  perfil: User;


  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              public alertController: AlertController) { }

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
      this.canchas.push(this.cancha);
      this.clean();
      window.alert('ACTUALIZADO CON EXITO');
      
      this.goSlide1();
    },
    (error) => {
      console.log(error);
    }
    );
  }

  eliminarCancha() {
    this.apiServi.deleteCancha(this.cancha.idCancha)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }



  obtenerIdComplejo(id: number) {
    this.cancha.idComplejo = id;
    // console.log('ESTE ES EL ID DEL COMPLEJO ' + this.cancha.idComplejo);
    this.obtenerCanchasComplejo(id);
  }
  obtenerIdComplejo2(id: number) {
    this.cancha.idComplejo = id;
    // console.log('ESTE ES EL ID DEL COMPLEJO ' + this.cancha.idComplejo);
  }

  clean() {
    this.cancha = new Cancha(0, null, null, '', null);
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

// ---------------------------------------------------SLIDES--------------------------------------------

  goSlide1() {
    this.atras = false;
    this.clean();
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

}
