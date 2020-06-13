import { Component, OnInit, ViewChild } from '@angular/core';
import { Complejo } from 'src/models/complejo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { IonSlides, NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { Cancha } from 'src/models/cancha.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Reservacion } from 'src/models/reservacion.models';
import * as moment from 'moment';

@Component({
  selector: 'app-lista-complejos',
  templateUrl: './lista-complejos.page.html',
  styleUrls: ['./lista-complejos.page.scss'],
})
export class ListaComplejosPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  
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
  complejo: Complejo = new Complejo(0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
  complejos: Complejo[] = [];
  abre;
  cierr;

  atras = false;
  cargando = false;
  listo = false;
  hoy = moment().format('YYYY-MM-DDTHH:mm');

  canchas: Cancha[] = [];
  cancha = {
    idCancha: 0,
    precio: null,
    foto: null,
    idComplejo: null
  };

  reservaComplejo: Reservacion = new Reservacion(0, new Date(), new Date(), false, false, 0, '');
  reservasComplejo: Reservacion[] = [];

  perfil: User;

  ver = false;



  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              private geolocation: Geolocation,
              public actionSheetController: ActionSheetController,
              public alertController: AlertController) { }

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
      this.abre = this.complejo.horaInicio;
      this.cierr = this.complejo.horaCierre;
      this.presentActionSheet();
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
    // this.complejo.latitud = 15.51789;
    // this.complejo.longitud = -88.03639;
    this.complejo.horaInicio = moment(this.abre).subtract(6, 'hour');
    this.complejo.horaCierre = moment(this.cierr).subtract(6, 'hour');
    console.log(moment(this.abre).format('YYYY-MM-DDTHH:mm') + ' ' + moment(this.cierr).format('YYYY-MM-DDTHH:mm'));
    this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
      .subscribe((data) => {
        // this.complejos.push(this.complejo);
        this.clear();
        // this.navCtrl.navigateRoot('/inicio');
        this.alertaService.alertaInformativa('Actualizado!!');
        this.obtenerComplejos();
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

      this.modificarSinFoto();
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

  localizacion() {
    this.cargando = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.complejo.latitud = resp.coords.latitude;
      this.complejo.longitud = resp.coords.longitude;
      this.cargando = false;
      this.listo = true;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }


// -------------------------------------------------METODOS RESERVAS---------------------------------------------

  obtenerReservasxComplejo(id: number) {
    this.apiServi.getReservacionComplejo(id)
    .subscribe((resp: Reservacion[]) => {
      this.reservasComplejo = resp;
      this.goSlide2();
      // console.log(resp);
    });
  }

  eliminarReservacion(id: number) {
    // const d = moment(dia).format('YYYY-MM-DDTHH:mm');

    // if (d < this.hoy) {
    //   return this.alertaService.alertaInformativa('No puedes eliminar esta reserva porque ya se vencio.')
    // }

    this.apiServi.deleteReservacion(id)
    .subscribe( resp => {
      this.goSlide1();
      this.alertaService.alertaInformativa('Realizado con exito');
      console.log('ELIMINADO CON EXITO');
    });
  }

  async presentAlertConfirmEliminar() {
    const alert = await this.alertController.create({
      header: 'Quieres eliminar esta reservacion!',
      message: '<strong>Eliminar</strong>??',
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
            this.complejo.estado = !this.complejo.estado;
            this.modificarSinFoto();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  verificar() {
    const hoy = moment().format('MM-DD-YYYY HH:mm');
    const inicio = moment(this.complejo.horaInicio).format('MM-DD-YYYY HH:mm');
    const cierre = moment(this.complejo.horaCierre).format('MM-DD-YYYY HH:mm');

    if (cierre < inicio) {
      this.ver = false;
      this.alertaService.alertaInformativa('La hora de cierre no puede ser menor que la de inicio.');
    } else {
      this.ver = true;
    }

  }


// -------------------------------------------------------------------------------------------------


  clear() {
    this.complejo = new Complejo(0, '', '', '', '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');
  }


// -----------------------------------------------ACTION SHEET-----------------------------------------------
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actualizar',
      buttons: [{
        text: 'Estado',
        icon: 'alert',
        cssClass: 'estado',
        handler: () => {
          this.presentAlertConfirm();
        }
      }, {
        text: 'Direccion',
        icon: 'location',
        cssClass: 'rojo',
        handler: () => {
          this.actualizarDireccion();
        }
      }, {
        text: 'Teléfono',
        icon: 'call',
        cssClass: 'azul',
        handler: () => {
          this.actualizarTelefono();
        }
      }, {
        text: 'Parqueo',
        icon: 'car',
        cssClass: 'blanco',
        handler: () => {
          this.parqueo();
        }
      }, {
        text: 'Seguridad',
        icon: 'lock-open',
        cssClass: 'morado',
        handler: () => {
          this.seguridad();
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
        text: 'Imagen',
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


  async actualizarDireccion() {
    const alert = await this.alertController.create({
      header: 'Cambia la dirección del complejo!',
      message: '<strong>Dirección actual: ' + this.complejo.localidad + ' </strong>',
      inputs: [
        {
          name: 'name',
          type: 'text',
          min: 5,
          max: 15
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.clear();
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            if (data.name.length < 5) {
              return this.alertaService.alertaInformativa('La dirección debe tener al menos 5 caracteres');
            } else {
              console.log('Confirm Ok');
              this.complejo.localidad = data.name;
              this.modificarSinFoto();
            }
          }
        }
      ]
    });

    await alert.present();
  }
  async actualizarTelefono() {
    const alert = await this.alertController.create({
      header: 'Cambia la dirección del complejo!',
      message: '<strong>Dirección actual: ' + this.complejo.numero + ' </strong>',
      inputs: [
        {
          name: 'numero',
          type: 'number',
          min: 5,
          max: 15
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.clear();
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            if (data.numero.length < 8 ) {
              return this.alertaService.alertaInformativa('El número debe tener 8 digitos');
            } else {
              console.log('Confirm Ok');
              this.complejo.numero = data.numero;
              this.modificarSinFoto();
            }
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Informa a tus clientes si estas Abierto/Cerrado!',
      message: '<strong>Confirma el cambio dando OK</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.complejo.estado = !this.complejo.estado;
            this.modificarSinFoto();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async parqueo() {
    const alert = await this.alertController.create({
      header: 'Informa a tus clientes si cuentas con parqueo!',
      message: '<strong>Confirma el cambio dando OK</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.complejo.parqueo = !this.complejo.parqueo;
            this.modificarSinFoto();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async seguridad() {
    const alert = await this.alertController.create({
      header: 'Informa a tus clientes si cuentas con seguridad!',
      message: '<strong>Confirma el cambio dando OK</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.complejo.seguridad = !this.complejo.seguridad;
            this.modificarSinFoto();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async eliminar(id: number) {
    const alert = await this.alertController.create({
      header: '¿Quieres eliminar esta reserva?',
      message: '<strong>Confirma dando OK</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.eliminarReservacion(id);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  // -------------------------------------------------SLIDE--------------------------------
  goSlide1() {
    this.clear();
    this.atras = false;
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

  goSlideActualizarDireccion() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarUbicacion() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarHorario() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(4);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarFoto() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(5);
    this.slides.lockSwipes(true);
  }

  goSlideActualizarNumero() {
    this.atras = true;
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
