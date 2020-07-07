import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, IonSlides } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { TorneoService } from 'src/app/services/torneo.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { User } from 'src/models/user.models';
import { Torneo } from 'src/models/torneo.models';
import { Complejo } from 'src/models/complejo.models';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.page.html',
  styleUrls: ['./crear-torneo.page.scss'],
})
export class CrearTorneoPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;


  perfil: User;

  ver = false;
  atras = false;

  torneo: Torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  torneos: Torneo[] = [];

  complejos: Complejo[] = [];
  complejo: Complejo = new Complejo(0, null, null, null, null, false, 0.0, 0.0, new Date(), new Date(), false, false, null);

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
  }


  crearTorneoConImagen() {
    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];
    if (!(/\.(jpg|png|jpeg)$/i).test(file.name)) {
      return alert('El archivo a adjuntar no es una imagen');
  }
    const imgPromise = this.getFileBlob(file);

    imgPromise.then(blob => {
      this.torneo.premioFoto = blob;

      this.postTorneo();

    });
  }

  postTorneo() {
    this.torneo.usuarioId = this.perfil.id;
    this.torneoService.postTorneo(this.torneo)
    .subscribe((data) => {
      this.torneos.push(this.torneo);
      this.clea();
      this.alertaService.alertaInformativa('Torneo creado con exito');
      this.navCtrl.navigateRoot('/torneo');
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

  verificar() {
    const hoy = moment().format('MM-DD-YYYY');
    const diaTorneo = moment(this.torneo.diaTorneo).format('MM-DD-YYYY');

    if (diaTorneo <= hoy) {
      this.ver = false;
      this.alertaService.alertaInformativa('El dia del torneo no puede ser igual al dia de hoy o anterior a el.')
    } else {
      this.ver = true;
    }

  }

  clea() {
    this.torneo = new Torneo(0, '', null, '', '', new Date(), '', 0);
  }

// ---------------------------------------------------------------------------------------------------------
  getIdComplejo() {
    this.torneo.idComplejo = this.complejo.idComplejo;
    console.log(this.torneo.idComplejo);
  }

  obtenerComplejos() {
    this.apiServi.getComplejoAdmin(this.perfil.id)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
    });
  }


// ---------------------------------------------------------------------------------------------------------
  goSlide1() {
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
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
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
