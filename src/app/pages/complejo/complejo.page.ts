import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { error } from 'protractor';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, IonSlides } from '@ionic/angular';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var mapboxgl: any;

@Component({
  selector: 'app-complejo',
  templateUrl: './complejo.page.html',
  styleUrls: ['./complejo.page.scss'],
})
export class ComplejoPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;


  complejos: Complejo[] = [];

  complejo = new Complejo(0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);

  cargando = false;
  listo = false;


  perfil: User;

  constructor(private apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService,
              private geolocation: Geolocation) { }

  ngOnInit() {
    // if (document.referrer !== 'http://localhost:8100/login') {
    //   location.href = 'http://localhost:8100/login';
    // }
    this.perfil = this.usuarioService.getUsuario();

    this.slides.lockSwipes(true);

    this.complejo.userId = this.perfil.id;

    this.obtenerComplejoXAdmin(this.perfil.id);

  }



  // --------------------------------METODOS COMPLEJO-------------------------------------
  obtenerComplejoXAdmin(id: string) {
    this.apiServi.getComplejoAdmin(id)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO', resp);
    });
  }

  obtenerComplejoId() {
    this.apiServi.getComplejoId(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }

  crearComplejo() {

    const fileInput: any = document.getElementById('img');
    const file = fileInput.files[0];

    const imgPromise = this.getFileBlob(file);

    imgPromise.then(blob => {
      this.complejo.foto = blob;
      // console.log("ESTE ES MI BLOB: " + blob);

      this.apiServi.postComplejo(this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.limpiar();
      this.listo = false;
      this.alertaService.alertaInformativa('Cambia el estado de complejo a ABIERTO AHORA para que tus clientes sepan que pueden visitarte');
      this.alertaService.alertaInformativa('Complejo creado. \n Puedes verlo en Mis Complejos.');
      this.navCtrl.navigateRoot('/inicio');
    },
    (error) => {
      console.log('ERROR: ', error);
    }
    );

    });

  }

  eliminarComplejo() {
    this.apiServi.deleteComplejo(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
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

  limpiar() {
    this.complejo = new Complejo(0, null, null, null, null, false, 0.0, 0.0, null, null, false, false, null);
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

  // getGeo() {

  //   this.cargando = true;

  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     this.cargando = false;

  //     this.complejo.longitud = resp.coords.longitude;
  //     this.complejo.latitud = resp.coords.latitude;

  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //      this.cargando = false;
  //    });

  // }





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

  goSlide4() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }


}
