import { Component, OnInit, ViewChild } from '@angular/core';
import { Complejo } from 'src/models/complejo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { IonSlides, NavController, ActionSheetController } from '@ionic/angular';
import { Cancha } from 'src/models/cancha.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-lista-complejos',
  templateUrl: './lista-complejos.page.html',
  styleUrls: ['./lista-complejos.page.scss'],
})
export class ListaComplejosPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  complejos: Complejo[] = [];
  // complejo = {
  //   idComplejo: 0,
  //   nombre: '',
  //   localidad: '',
  //   foto: null,
  //   estado: false,
  //   longitud: 0,
  //   latitud: 0,
  //   horaInicio: new Date(),
  //   horaCierre: new Date(),
  //   userId: ''
  // };
  complejo: Complejo = new Complejo(0, '', '', null, false, 0, 0, new Date(), new Date(), '');

  cargando = false;
  listo = false;

  canchas: Cancha[] = [];
  cancha = {
    idCancha: 0,
    precio: null,
    foto: null,
    idComplejo: null
  };

  perfil: User;



  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              private geolocation: Geolocation,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {

    this.slides.lockSwipes(true);

    this.perfil = this.usuarioService.getUsuario();

    this.obtenerComplejos();

  }


  // --------------------------------------------METODOS COMPLEJOS------------------------------------
  obtenerComplejos() {
    this.apiServi.getComplejoAdmin(this.perfil.id)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
    });
  }

  obtenerComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      console.log(this.complejo);
    });
  }

  obtenerIdComplejo(id: number) {
    this.cancha.idComplejo = id;
  }
  obtenerComplejo(id: number) {
    this.obtenerComplejoId(id);
  }


  modificarSinFoto() {
    this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
      .subscribe((data) => {
        this.complejos.push(this.complejo);
        // this.limpiar();
        window.alert('ACTUALIZADO CON EXITO');
        this.navCtrl.navigateRoot('/inicio');
      },
      (error) => {
        console.log(error);
      }
      );
  }

  modificarComplejo() {

    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];
    const imgPromise = this.getFileBlobCancha(file);

    imgPromise.then(blob => {
      this.complejo.foto = blob;

      this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
      .subscribe((data) => {
        this.complejos.push(this.complejo);
        // this.limpiar();
        window.alert('ACTUALIZADO CON EXITO');
        this.navCtrl.navigateRoot('/inicio');
      },
      (error) => {
        console.log(error);
      }
      );
  });
  }


  // --------------------------------------------METODOS CANCHAS--------------------------------------
  // agregarCancha() {

  //   const fileInput: any = document.getElementById('imgCancha');
  //   const file = fileInput.files[0];
  //   const imgPromise = this.getFileBlobCancha(file);

  //   imgPromise.then(blob => {
  //     this.cancha.foto = blob;

  //     this.apiServi.postCancha(this.cancha)
  //   .subscribe((data) => {
  //     this.canchas.push(this.cancha);
  //     this.cancha = {
  //       idCancha: 0,
  //       precio: null,
  //       foto: null,
  //       idComplejo: null
  //     };
  //     this.alertaService.alertaInformativa('Cancha agregada');
  //     this.navCtrl.navigateRoot('/inicio');
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  //   });
  // }

  // obtenerCanchasComplejo(id: number) {
  //   this.apiServi.getCanchaComplejo(id)
  //   .subscribe((resp: Cancha[]) => {
  //     this.canchas = resp;
  //   });
  // }

  // idCancha(id: number) {
  //   this.cancha.idCancha = id;
  // }





  // ---------------------------------------------------METODOS IMAGENES--------------------------------
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



  async loadMap() {
    this.cargando = true;
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.cargando = false;
    this.listo = true;

    this.complejo.longitud = myLatLng.lng;
    this.complejo.latitud = myLatLng.lat;
  }


  clear() {
    this.complejo = new Complejo(0, '', '', null, false, 0, 0, new Date(), new Date(), '');
  }


  // -------------------------------------------ACTION SHEET----------------------
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actualizar',
      buttons: [{
        text: 'Direccion',
        icon: 'location',
        cssClass: 'rojo',
        handler: () => {
          this.goSlideActualizarDireccion();
        }
      }, {
        text: 'Ubicacion',
        icon: 'compass',
        cssClass: 'azul',
        handler: () => {
          this.goSlideActualizarUbicacion();
        }
      }, {
        text: 'Horario',
        icon: 'alarm',
        cssClass: 'verde',
        handler: () => {
          this.goSlideActualizarHorario();
        }
      }, {
        text: 'Foto',
        icon: 'camera-reverse',
        cssClass: 'morado',
        handler: () => {
          this.goSlideActualizarFoto();
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


  // -------------------------------------------------SLIDE--------------------------------
  goSlide1() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  goSlideActualizar() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarDireccion() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarUbicacion() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarHorario() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(4);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarFoto() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(5);
    this.slides.lockSwipes(true);
  }

  goSlideAgregarCancha() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(6);
    this.slides.lockSwipes(true);
  }

  goSlideVerCancha() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(7);
    this.slides.lockSwipes(true);
  }

}
