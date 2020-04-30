import { Component, OnInit, ViewChild } from '@angular/core';
import { Cancha } from 'src/models/cancha.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController, IonSlides } from '@ionic/angular';
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
              private alertaService: AlertaServiceService) { }

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
      this.cancha = {
        idCancha: 0,
        precio: null,
        foto: null,
        idComplejo: null
      };
      window.alert('ACTUALIZADO CON EXITO');
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
    console.log('ESTE ES EL ID DEL COMPLEJO ' + this.cancha.idComplejo);
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
      this.cancha = {
        idCancha: 0,
        precio: null,
        foto: null,
        idComplejo: null
      };
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
    });
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






  goSlide1() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  goSlideCancha() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  goSlideVerCancha() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

}
