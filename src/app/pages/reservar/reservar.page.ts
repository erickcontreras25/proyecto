import { Component, OnInit, ViewChild } from '@angular/core';
import { Reservacion } from 'src/models/reservacion.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { IonSlides, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Usuario } from 'src/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/models/user.models';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { TorneoService } from 'src/app/services/torneo.service';
import { Torneo } from 'src/models/torneo.models';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  nombre: string;
  seleccion: number;
  atras = false;

  complejosAbiertos: Complejo[];
  canchas: Cancha[];
  aux = false;
  auxReser = false;
  auxHoras;

  complejos: Complejo[];

  complejo = new Complejo(0, '', '', null, '', false, 0.0, 0.0, new Date(), new Date(), false, false, '');

  canchaId = new Cancha(0, null, null, null, 0);
  //  {
  //   idCancha: 0,
  //   precio: null,
  //   foto: null,
  //   idComplejo: null
  // };

  reservaciones: Reservacion[] = [];
  reser: Reservacion[] = [];

  reservacion = new Reservacion(0, null, null, false, false, 0, '');
  //  {
  //   idReservacion: 0,
  //   horaInicial: null,
  //   horaFinal: null,
  //   pago: false,
  //   pagoParcial: false,
  //   idCancha: 0,
  //   userId: ''
  // };
  hInicio;
  hFin;
  torneo: Torneo[] = [];
  diaTorneo = false;


  perfil: User;

  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              private torneoService: TorneoService) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.reservacion.userId = this.perfil.id;
    // console.log('ESTE ES EL ID OBTENIDO > > ' + this.reservacion.userId);


    this.obtenerComplejos();

    this.obtenerComplejoEstado();


  }


  // ---------------METODOS COMPLEJO------------------------------------------------
  obtenerComplejos() {
    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      // console.log('SERVICIO ', resp);
    });
  }

  obtenerComplejoEstado() {
    this.apiServi.getComplejoEstado(true)
    .subscribe((resp: Complejo[]) => {
      this.complejosAbiertos = resp;
    });
  }

  obtenerComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      this.goCancha();
      this.getTorneoId(id);
      // console.log(this.complejo);
    });
  }


  // ----------------------METODOS RESERVAR-----------------------------------
  obtenerReservacionId() {
    this.apiServi.getReservacionId(this.reservacion.idReservacion)
    .subscribe( resp => {
      // console.log('EJECUTADO CON EXITO');
    });
  }
  agregarReservacion() {
    this.reservacion.horaInicial = moment(this.hInicio).subtract(6, 'hour');
    this.reservacion.horaFinal = moment(this.hFin).subtract(6, 'hour');

    this.apiServi.postReservacion(this.reservacion)
    .subscribe((data) => {
      this.reservaciones.push(this.reservacion);
      this.reservacion = {
        idReservacion: 0,
        horaInicial: new Date(),
        horaFinal: new Date(),
        pago: false,
        pagoParcial: false,
        idCancha: 0,
        userId: ''
      };
      this.alertaService.alertaInformativa('Su reserva se realizó con éxito. \n Puede verla ingresando a Mi Perfil');
      this.navCtrl.navigateRoot('/inicio');
    },
    (error) => {
      console.log(error);
      window.alert('Ingrese los datos correctamente');
    }
    );
  }
  modificarReservacion() {
    this.apiServi.putReservacion(this.reservacion.idReservacion, this.reservacion)
    .subscribe((data) => {
      this.reservaciones.push(this.reservacion);
      this.reservacion = {
        idReservacion: 0,
        horaInicial: new Date(),
        horaFinal: new Date(),
        pago: false,
        pagoParcial: false,
        idCancha: 0,
        userId: ''
      };
      window.alert('Actualizado');
    },
    (error) => {
      console.log(error);
    }
    );
  }
  eliminarReservacion() {
    this.apiServi.deleteReservacion(this.reservacion.idReservacion)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }

  volver() {
    this.auxReser = false;
  }



  // ----------------------------METODOS CANCHAS-----------------------------------
  obtenerCanchasComplejo(id: number) {
    this.apiServi.getCanchaComplejo(id)
    .subscribe((resp: Cancha[]) => {
      this.canchas = resp;
      this.obtenerComplejoId(id);
      // console.log('CANCHAS ', this.canchas);
    });
  }
  obtenerCanchaId(id: number) {
    this.apiServi.getCanchaId(id)
    .subscribe((resp: Cancha) => {
      this.canchaId = resp;
      this.reservacion.idCancha = this.canchaId.idCancha;
    });
  }


  obtenerReservas(id: number) {
    this.apiServi.getReservacionComplejo(id)
    .subscribe((resp: Reservacion[]) => {
      this.reser = resp;
      // console.log(this.reser);
    });
  }

  getTorneoId(id: number) {
    this.torneoService.getTorneooId(id)
    .subscribe( (resp: Torneo[]) => {
      this.torneo = resp;
      if (this.torneo != null) {
        this.diaTorneo = true;
      }
      // console.log(this.torneo);
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

    // if (this.diaTorneo === true) {
    //   console.log(this.torneo.length);
    //   for (let i = 0; i < this.torneo.length; i++) {
    //     console.log(this.diaTorneo);
    //     if (diaReserva === moment(this.torneo[i].diaTorneo).format('MM-DD-YYYY')) {
    //       return alert('Este dia no esta disponible ya que se realizará un torneo');
    //     }
    //     console.log('diaaa ' + diaReserva + ' ' + moment(this.torneo[i].diaTorneo).format('MM-DD-YYYY'));
    //   }
    // }

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




  // -------------------------------METODOS OBTENER------------------
idCancha(id: number) {
  this.reservacion.idCancha = id;
}
// precioCancha(precio: number) {
//   this.seleccion = precio;
// }
// nombreComplejo(nombre: string) {
//   this.complejo.nombre = nombre;
// }
// localidadComplejo(local: string) {
//   this.complejo.localidad = local;
// }
obtenerComplejo(id: number) {
  this.obtenerComplejoId(id);
}
obtenerCancha(id: number) {
  this.obtenerCanchaId(id);
  this.obtenerReservas(id);
}
llenar() {
  this.reservacion.idCancha = this.canchaId.idCancha;
}




// -------------------------------------------------SLIDE--------------------------------
goComplejos() {
  this.atras = false;
  this.slides.lockSwipes(false);
  this.slides.slideTo(0);
  this.slides.lockSwipes(true);
}

goCancha() {
  this.atras = true;
  this.auxReser = false;
  this.slides.lockSwipes(false);
  this.slides.slideTo(1);
  this.slides.lockSwipes(true);
}

goHorarios() {
  // this.obtenerReservas();
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}

goReservar() {
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
      this.diaTorneo = false;
      this.atras = false;
    }
  });
}


}
