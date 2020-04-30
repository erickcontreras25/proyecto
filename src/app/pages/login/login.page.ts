import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlide, IonSlides } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Usuario } from 'src/models/usuario.models';
import { Admin } from 'src/models/admin.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  // pAdmin: any[] = [{
  //   nombre: '',
  //   email: '',
  //   password: '',
  //   rol: true
  // }];

  // prueba: any[] = [{
  //   idUsuario: '',
  //   nombre: '',
  //   nombreUsuario: '',
  //   edad: 0,
  //   email: '',
  //   password: '',
  //   rol: false,
  // }];

  perfiles: Usuario[] = [];

  idUsuario;
  perfil = new Usuario(null, null, null, null, false);

  auxNombre: string = '';
  auxPassword: string = '';
  auxEstado: boolean = false;
  estado: number = 0;
  seleccion;

  constructor(public navCtr1: NavController,
              public apiServi: ApiserviService,
              private usuarioService: UsuarioService,
              private alertaService: AlertaServiceService) { }


  ngOnInit() {

    this.slides.lockSwipes(true);

    
  }

  async goInicio() {

    const valido = await this.usuarioService.login( this.auxNombre, this.auxPassword);

    if (valido) {
      // NAVEGAR A INICIO
      this.auxNombre = '';
      this.auxPassword = '';
      this.navCtr1.navigateRoot('/inicio', { animated: true });
    } else {
      // MOSTRAR ALERTA
      this.auxPassword = '';
      this.alertaService.alertaInformativa('Usuario o contrasenia invalido.');
    }

  }


  async registro() {

    const valido = await this.usuarioService.registro(this.perfil);

    if (valido) {
      // NAVEGAR A Login
      this.perfil = new Usuario(null, null, null, null, false);
      this.mostrarRegistro();
    } else {
      // MOSTRAR ALERTA
      this.auxPassword = '';
      this.alertaService.alertaInformativa('Ese correo electrónico ya existe.');
    }

  }

  // goInicio(): void {

  //   for (let index = 0; index < this.prueba.length; index++) {
  //       if (this.auxNombre === this.prueba[index].email && this.auxPassword === this.prueba[index].password) {
  //         this.navCtr1.navigateForward('/inicio');
  //         this.apiServi.setAuxUsu(this.prueba[index].idUsuario);
  //         this.apiServi.setAuxEst(this.prueba[index].rol);
  //         this.apiServi.setAuxNom(this.prueba[index].nombreUsuario);
  //       }
  //   }
  //   for (let index = 0; index < this.pAdmin.length; index++) {
  //     if (this.auxNombre === this.pAdmin[index].email && this.auxPassword === this.pAdmin[index].password) {
  //       this.navCtr1.navigateForward('/inicio');
  //       this.apiServi.setAuxUsu(this.pAdmin[index].idAdmin);
  //       this.apiServi.setAuxEst(this.pAdmin[index].rol);
  //       this.apiServi.setAuxNom(this.pAdmin[index].nombreUsuario);
  //     }
  // }
  // }


  // agregarUsuario() {
  //     this.apiServi.postUsuario(this.perfil)
  //   .subscribe((data) => {
  //     this.perfiles.push(this.perfil);
  //     this.perfil = {
  //       nombreUsuario: null,
  //       edad: null,
  //       email: null,
  //       password: null,
  //       rol: false
  //     };
  //     this.alertaService.alertaInformativa('AGREGADO');
  //     this.apiServi.getUsuario()
  //   .subscribe((resp: any[]) => {
  //     // this.prueba = resp;
  //     console.log("AQUI ESTA: ", resp);
  //   });
  //   this.mostrarRegistro();
  //   },
  //   (error) => {console.log(error);
  //   }
  //   );

  // }


  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }



}
