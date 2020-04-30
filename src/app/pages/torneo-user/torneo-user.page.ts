import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController, NavController } from '@ionic/angular';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { TorneoService } from 'src/app/services/torneo.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { Torneo } from 'src/models/torneo.models';
import { TorneoEquipo } from 'src/models/torneoEquipo.models';
import { Equipo } from 'src/models/equipo.models';
import * as moment from 'moment';
import { EquipoService } from 'src/app/services/equipo.service';
import { Complejo } from 'src/models/complejo.models';

@Component({
  selector: 'app-torneo-user',
  templateUrl: './torneo-user.page.html',
  styleUrls: ['./torneo-user.page.scss'],
})
export class TorneoUserPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;
  perfil: User;

  torneos: Torneo[] = [];
  torneosNoVen: Torneo[] = [];
  torneo: Torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);

  torneoEquipo: TorneoEquipo = new TorneoEquipo(0, 0);
  torneosEquipos: TorneoEquipo[] = [];
  torneoEquipos: TorneoEquipo[] = [];

  equipo: Equipo = new Equipo(0, '', '');
  equipos: Equipo[] = [];

  complejo: Complejo = new Complejo(0, '', '', '', false, 0.0, 0.0, new Date(), new Date(), '');

  hoy = moment().format('YYYY-MM-DDTHH:mm');

  constructor(public actionSheetController: ActionSheetController,
              private usuarioService: UsuarioService,
              private apiServi: ApiserviService,
              private torneoService: TorneoService,
              private alertaService: AlertaServiceService,
              private navCtrl: NavController,
              private equipoService: EquipoService) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.getTodosTorneos();
  }


  // -------------------------------------------METODOS TORNEO---------------------------------------

  getTodosTorneos() {
    this.torneoService.getTorneos()
    .subscribe((resp: Torneo[]) => {
      this.torneos = resp;
      console.log(resp);
      this.noVencidas();
    });
  }

  getTorneoId(id: number) {
    this.torneoService.getTorneooId(id)
    .subscribe( (resp: Torneo) => {
      this.torneo = resp;
      this.obtenerComplejoId(this.torneo.idComplejo);
      this.getEquipoxTorneo(this.torneo.idTorneo);
      this.obtenerEquipoDeUser();
    });
  }

  noVencidas() {
    let valor = 0;

    for (let i = 0; i < this.torneos.length; i++) {
      const val = moment(this.torneos[i].diaTorneo).format('YYYY-MM-DDTHH:mm');
      if (this.hoy < val) {
        this.torneosNoVen[valor] = this.torneos[i];
        valor++;
      }
    }
  }

  // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------

  getEquipoxTorneo(id: number) {
    this.torneoService.getTorneoEquipoId(id)
    .subscribe((resp: TorneoEquipo[]) => {
       this.torneosEquipos = resp;
    },
    error => {
      console.log(error);
    });
  }

  registrar() {
    this.torneoEquipo.torneoId = this.torneo.idTorneo;
    if (this.torneoEquipo.equipoId === 0) {
      this.alertaService.alertaInformativa('Primero debes elegir un equipo donde seas capitan.');
    } else {
      this.validar();
    }
  }

  registrarEquipo() {
    console.log('IDTORNEO: ' + this.torneoEquipo.torneoId + ' IDEQUIPO: ' + this.torneoEquipo.equipoId);
    this.torneoService.postTorneoEquipo(this.torneoEquipo)
    .subscribe(data => {
      if (data === 'Torneo ya esta lleno.') {
        this.alertaService.alertaInformativa(data);
      } else {
        this.torneoEquipos.push(this.torneoEquipo);
        this.alertaService.alertaInformativa('Registrado!!');
        this.navCtrl.navigateRoot('/inicio');
      }
    },
    (error) => {
      this.alertaService.alertaInformativa('El equipo ya esta inscrito. Puedes verlo en Mis Torneos');
    });
  }

  validar() {
    if (this.torneosEquipos.length < this.torneo.cantEquipos) {
      this.registrarEquipo();
    } else {
      this.alertaService.alertaInformativa('Torneo ya esta lleno.');
    }
  }

  llenar(id: number) {
    this.torneoEquipo.equipoId = this.equipo.idEquipo;
  }


  // -------------------------------------------METODOS EQUIPOS---------------------------------------

  obtenerEquipoDeUser() {
    this.equipoService.getEquipoxUsuario(this.perfil.id)
    .subscribe((resp: Equipo[]) => {
      this.equipos = resp;
    });
  }

  // -------------------------------------------METODOS COMPLEJO---------------------------------------

  obtenerComplejoId(id: number) {
    this.apiServi.getComplejoId(id)
    .subscribe( (resp: Complejo) => {
      this.complejo = resp;
      this.goSlide2();
    });
  }


  clea() {
    this.complejo = new Complejo(0, '', '', '', false, 0.0, 0.0, new Date(), new Date(), '');
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

}
