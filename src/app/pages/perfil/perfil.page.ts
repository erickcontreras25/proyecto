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
import { AlertController, NavController, IonSlides, ActionSheetController } from '@ionic/angular';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';

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
  auxReser = false;
  parcial = false;
  completo = false;
  atras = false;

  reservacion: Reservacion = new Reservacion(0, new Date(), new Date(), false, false, 0, '');
  reservaciones: Reservacion[] = [];
  reser: Reservacion[] = [];
  hInicio;
  hFin;

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
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {

    this.user = this.usuarioService.getUsuario();
    // console.log(this.user);
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
      // console.log('SERVICIO', resp);
      this.noVencidas();
    });
  }
  eliminarReservacion() {
    this.apiServi.deleteReservacion(this.reservacion.idReservacion)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
      this.obtenerMisReservacion();
      this.goSlide1();
    });
  }

  modificarReservacion() {
    this.reservacion.horaInicial = moment(this.hInicio).subtract(6, 'hour');
    this.reservacion.horaFinal = moment(this.hFin).subtract(6, 'hour');
    this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion)
    .subscribe((data) => {
      // this.clear();
      this.obtenerMisReservacion();
      this.goSlide1();
      window.alert('Actualizado!!');
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
      this.obtenerReservas(id);
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

    const ini = moment().format('MM-DD-YYYY HH:mm');
    let valor = 0;

    for (let i = 0; i < this.reservaciones.length; i++) {

      const val = moment(this.reservaciones[i].horaFinal).format('MM-DD-YYYY HH:mm');
      
      if (ini < val) {
        this.reservacionesNoVencidas[valor] = this.reservaciones[i];
        valor++;
      }
    }
  }

  obtenerReservas(id: number) {
    this.apiServi.getReservacionComplejo(id)
    .subscribe((resp: Reservacion[]) => {
      this.reser = resp;
      // console.log(this.reser);
    });
  }

  validarFecha() {

    const ini = moment().format('MM-DD-YYYY HH:mm');

    const dInicial = moment(this.hInicio).format('MM-DD-YYYY HH:mm');
    const dFinal = moment(this.hFin).format('MM-DD-YYYY HH:mm');

    const abre = moment(this.hInicio).format('HH');
    const cierra = moment(this.hFin).format('HH');
    const abreComplejo = moment(this.complejo.horaInicio).format('HH');
    const cierraComplejo = moment(this.complejo.horaCierre).format('HH');

    const diaReserva = moment(this.hInicio).format('MM-DD-YYYY');


    if (dInicial <= ini || dFinal <= ini) {
      this.volver();
      return alert('La hora inicial o final no puede ser menor que la hora actual');
    }

    if (dFinal < dInicial) {
      this.volver();
      return alert('La hora final no puede ser menor que la hora inicial.');
    }

    if (dInicial === dFinal) {
      this.volver();
      return alert('La hora final no puede ser igual que la inicial');
    }

    if (abre < abreComplejo || cierra > cierraComplejo) {
      this.volver();
      return alert('Solo puede reservar en horario que permite el complejo');
    }

    for (let i = 0; i < this.reser.length; i++) {
      const fechInicial = moment(this.reser[i].horaInicial).format('MM-DD-YYYY H:mm');
      const fechFinal = moment(this.reser[i].horaFinal).format('MM-DD-YYYY H:mm');

      if (dInicial > fechInicial && dInicial < fechFinal || dFinal > fechInicial && dFinal < fechFinal) {
        this.volver();
        return alert('El horario de ' + fechInicial + ' a ' + fechFinal + ' no esta disponible');
      }

      if (dInicial === fechInicial || dFinal === fechFinal) {
        this.volver();
        return alert('Este horario no esta disponible');
      }

    }
    const inic = moment(this.hInicio);
    const fin = moment(this.hFin);
    this.auxHoras = fin.diff(inic, 'hours');

    if (this.auxHoras >= 4) {
      this.volver();
      return alert('No puedes reservar por más de 3 horas.');
    }

    this.auxReser = true;
    return alert('Horario disponible');
  }
  volver() {
    this.auxReser = false;
  }
  validarSiPago() {
    if (this.reservacion.pago === true || this.reservacion.pagoParcial === true) {
      return this.alertaService.alertaInformativa('No puedes cancelar porque ya pagaste.\nComunícate con el encargado del complejo.');
    } else {
      this.eliminarReservacion();
    }
  }
  validarSiPago2() {
    if (this.reservacion.pago === true || this.reservacion.pagoParcial === true) {
      return this.alertaService.alertaInformativa('No puedes hacer cambios porque ya pagaste.\nComunícate con el encargado del complejo.');
    } else {
      this.goSlide3();
    }
  }
  clear() {
    this.reservacion = new Reservacion(0, new Date(), new Date(), false, false, 0, '');
  }


// --------------------------------------------------------------------------------------------------
async confirmarCancelacion() {
  const alert = await this.alertController.create({
    header: '¿Quieres cancelar la reserva?',
    message: '<strong>Click Ok </strong>',
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
          this.validarSiPago();
          console.log('Confirm Okay');
        }
      }
    ]
  });
  await alert.present();
}

async actualizar() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Actualizar',
    buttons: [{
      text: 'Dia reserva',
      icon: 'calendar',
      cssClass: 'azul',
      handler: () => {
        this.validarSiPago2();
      }
    }, {
      text: 'Cancelar reserva',
      icon: 'trash',
      cssClass: 'rojo',
      handler: () => {
        this.confirmarCancelacion();
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

  async pagarParcial() {
    const alert = await this.alertController.create({
      header: 'Confirma el pago',
      message: '<strong>¿Cuánto quieres pagar</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.parcial = false;
            this.completo = false;
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
            this.modificarReservacion();
          }
          if (this.completo === true) {
            this.reservacion.pago = true;
            this.modificarReservacion();
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
          this.parcial = false;
          this.completo = false;
          // Ha petado el cuadro de diálogo
        });
      }, () => {
        this.parcial = false;
        this.completo = false;
        // Ha petado la configuración
      });
    }, () => {
      this.parcial = false;
      this.completo = false;
      // Ha petado la inicialización o el dispositivo no permite usar PayPal
    });
  }


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

  goSlide3() {
    this.atras = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

}
