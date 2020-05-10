import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, IonSlides } from '@ionic/angular';
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

  torneo: Torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  torneoUser: Torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  torneos: Torneo[] = [];
  torneosxUser: Torneo[] = [];

  equipoxTorneo: TorneoEquipo[] = [];
  torneoEquipo: TorneoEquipo = new TorneoEquipo(0, 0);

  mostrarCrear = false;

  hoy = moment().format('YYYY-MM-DDTHH:mm');


  perfil: User;

  constructor(public actionSheetController: ActionSheetController,
              private usuarioService: UsuarioService,
              private apiServi: ApiserviService,
              private torneoService: TorneoService,
              private alertaService: AlertaServiceService,
              private navCtrl: NavController) { }

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
      console.log(resp);
    });
  }

  getTorneoId(id: number) {
    this.torneoService.getTorneooId(id)
    .subscribe( (resp: Torneo) => {
      this.torneoUser = resp;
      this.goSlide2();
    });
  }

  crearTorneoConImagen() {
    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];

    const imgPromise = this.getFileBlob(file);

    imgPromise.then(blob => {
      this.torneo.premioFoto = blob;
      // console.log("ESTE ES MI BLOB: " + blob);

      this.postTorneo();

    });
  }

  crearTorneo() {
    if (this.torneo.premioFoto !== '') {
      this.crearTorneoConImagen();
    } else {
      this.postTorneo();
    }
  }

  postTorneo() {
    this.torneo.usuarioId = this.perfil.id;
    this.torneoService.postTorneo(this.torneo)
    .subscribe((data) => {
      this.torneos.push(this.torneo);
      this.clea();
      this.mostrarCrear = false;
      this.alertaService.alertaInformativa('Torneo creado con exito');
      this.getTorneoxUser();
    },
    (error) => {
      console.log('ERROR: ', error);
    }
    );
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
    this.torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  }


  // -------------------------------------------METODOS TORNEO-EQUIPO---------------------------------------

  getEquipoxTorneo(id: number) {
    this.torneoService.getTorneoEquipoId(id)
    .subscribe((resp: TorneoEquipo[]) => {
       this.equipoxTorneo = resp;
       this.goSlide3();
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

  getIdComplejo() {
    this.torneo.idComplejo = this.complejo.idComplejo;
    console.log(this.torneo.idComplejo);
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

goSlide3() {
  this.slides.lockSwipes(false);
  this.slides.slideTo(2);
  this.slides.lockSwipes(true);
}

}
