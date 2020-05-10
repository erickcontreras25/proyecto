import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/models/usuario.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Reservacion } from 'src/models/reservacion.models';
import { Equipo } from 'src/models/equipo.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/models/user.models';
import { Cancha } from 'src/models/cancha.models';
import { Complejo } from 'src/models/complejo.models';
import * as moment from 'moment';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { AlertController, NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  idUsuario;
  idReser;
  nombreUsu;

  totalPagar;
  auxHoras;
  auxPrecio;
  parcial = false;
  completo = false;

  reservacion: Reservacion = new Reservacion(0, new Date(), new Date(), false, false, 0, '');
  reservaciones: Reservacion[] = [];

  reservacionesNoVencidas: Reservacion[] = [];

  cancha: Cancha = new Cancha(0, null, null, '', null);
  complejo: Complejo = new Complejo(0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);

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
              private usuarioService: UsuarioService,
              private payPal: PayPal,
              public alertController: AlertController,
              private navCtrl: NavController) { }

  ngOnInit() {

    this.user = this.usuarioService.getUsuario();
    console.log(this.user);
    this.slides.lockSwipes(true);

    this.obtenerMisReservacion();

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
  obtenerReservacionId(id: number) {
    this.apiServi.getReservacionId(id)
    .subscribe( (resp: Reservacion) => {
      this.reservacion = resp;
      this.valorPagar();
      // console.log('EJECUTADO CON EXITO');
      this.obtenerCanchaId(this.reservacion.idCancha);
    });
  }
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

  modificarReservacion(id: number) {
    this.apiServi.putReservacion(id, this.reservacion)
    .subscribe((data) => {
      this.reservacion = new Reservacion(0, new Date(), new Date(), false, false, 0, '');
      this.navCtrl.navigateRoot('/inicio');
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }

  obtenerCanchaId(id: number) {
    this.apiServi.getCanchaId(id)
    .subscribe( (resp: Cancha) => {
      this.cancha = resp;
      this.getComplejoId(this.cancha.idComplejo);
      // console.log('EJECUTADO CON EXITO');
    });
  }

  getComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      this.goSlide2();
      // console.log('EJECUTADO CON EXITO');
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


// --------------------------------------------------------------------------------------------------
  async pagarCompleto() {
    const alert = await this.alertController.create({
      header: 'Confirmar pago',
      message: '<strong>--</strong>??',
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
            this.totalPagar = this.auxHoras * this.cancha.precio;
            this.completo = true;
            this.pagar();
            console.log(this.totalPagar);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async pagarParcial() {
    const alert = await this.alertController.create({
      header: 'Confirmar pago',
      message: '<strong>Cuanto quieres pagar</strong>??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Pagar 50%',
          handler: () => {
            this.totalPagar = this.auxHoras * this.cancha.precio * 0.50;
            this.parcial = true;
            this.pagar();
            console.log(this.totalPagar);
            console.log('Confirm Okay');
          }
        }, {
          text: 'Pagar 100%',
          handler: () => {
            this.totalPagar = this.auxHoras * this.cancha.precio;
            this.completo = true;
            this.pagar();
            console.log(this.totalPagar);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  valorPagar() {
    const inic = moment(this.reservacion.horaInicial);
    const fin = moment(this.reservacion.horaFinal);
    this.auxHoras = fin.diff(inic, 'hours');
  }

// ----------------------------------------------------------------------------------------
  pagar() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'TU_ID_DE_CLIENTE_EN_PRODUCCIÓN',
      PayPalEnvironmentSandbox: 'Adx-VcPcx3n-_g5CtBrAa78tHzUAEOoX9C5Tu2xsOVZns8hsuaqAr01SBshIr70HGbIvCAP4KJOtdImR' //Sandbox
    }).then(() => {
      // Entornos: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Solo lo necesitas si necesitas controlar los errores posteriores al login de paypal "Internal Service Error".
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let cobro = new PayPalPayment(this.totalPagar, 'USD', 'Description', 'Reserva');
        this.payPal.renderSinglePaymentUI(cobro).then(() => {
          if (this.parcial === true) {
            this.reservacion.pagoParcial = true;
            this.modificarReservacion(this.reservacion.idReservacion);
          }
          if (this.completo === true) {
            this.reservacion.pago = true;
            this.modificarReservacion(this.reservacion.idReservacion);
          }
          // Se ha realizado el cobro correctamente
          // En caso de estar en desarrollo, este el código de la Sandbox
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-XXXXXXXXXXXXXXXXXXXXXXXX",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Ha petado el cuadro de diálogo
        });
      }, () => {
        // Ha petado la configuración
      });
    }, () => {
      // Ha petado la inicialización o el dispositivo no permite usar PayPal
    });
  }


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
