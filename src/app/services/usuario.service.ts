import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { Usuario } from 'src/models/usuario.models';
import { resolve } from 'url';
import { async } from '@angular/core/testing';
import { User } from 'src/models/user.models';
import { AlertaServiceService } from './alerta-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  expiration: string = null;
  usuario: Usuario;
  private auxEst: boolean;
  // private user: User = null;
  private user = {
    id: null,
    email: null,
    nombreUsuario: null,
    edad: null,
    isAdmin: null
  };

  private url = 'https://conmigo.armalapotra.com/api';


  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController,
              private alertaSercice: AlertaServiceService) { }


  login(email: string, password: string) {
    const data = { email, password};

    return new Promise( resolve => {
      this.http.post(`${this.url}/account/login`, data)
    .subscribe( async resp => {
      console.log('PASO 0 >> ' + resp);

      if ( resp['ok']) {
        await this.guardarToken( resp['token'] );
        this.guardarVencimiento(resp['expiration']);
        resolve(true);
      } else {
        this.token = null;
        this.expiration = null;
        this.storage.clear();
        resolve(false);
      }
    });

    });
  }

  logout() {
    this.token = null;
    this.expiration = null;
    this.user = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }


  registro( usuario: Usuario ) {
    
    return new Promise( resolve => {

      this.http.post(`${this.url}/account/create`, usuario)
      .subscribe( resp => {
        // console.log(resp);

        if( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }

       });
    } );
  }


  // OBTENER USUARIO------------------------------------------------
  getUsuario() {

    return { ...this.user };

  }

  // METODOS GUARDAR EN STORAGE--------------------------------------
  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
    console.log('GUARDAR TOKEN DEBE IR PRIMERO');

    await this.validaToken();

  }

  async guardarVencimiento(expiration: string) {
    this.expiration = expiration;
    console.log('GUARDAR VENCIMIENTO DEBE IR SEGUNDO');

    await this.storage.set('expiration', expiration);
  }

  // METODOS CARGAR DESDE STORAGE-------------------------------------
  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async cargarVenci() {
    this.expiration = await this.storage.get('expiration') || null;
  }



  // METODOS PARA VALIDAR--------------------------------------------
  async validaToken(): Promise<boolean> {

    await this.cargarToken();
    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise( resolve => {
      
      if (this.verificarVencimiento()) {
        const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token});

        this.http.get(`${this.url}/user`, {headers: tokenHeaders})
        .subscribe( (resp: any) => {
          this.user = resp;
          // console.log( 'PASO 3 >> ' );
          // console.log(this.user);

          // if (this.user.isAdmin === true) {
          //   this.setAuxEst(true);
          // } else {
          //   console.log( 'PASO 4 >> ' + 'ESTO ES EN DONDE QUIERO');
          //   this.setAuxEst(false);
          // }
          resolve(true);
        });
      } else {
        resolve(false);
        this.navCtrl.navigateRoot('/login');
      }
      


    });

  }

  async verificarVencimiento() {
    await this.cargarVenci();
    if (!this.expiration) {
      return false;
    } else {
      const actual = moment().format('MM-DD-YYYY HH:mm');
      const aux = moment(this.expiration).format('MM-DD-YYYY HH:mm');
      console.log( 'PASO 1 >> ' + 'HORA ' + actual + ' EXPIRA ' + aux);

      if (actual >= aux) {
        console.log( 'PASO 2 >> ' + 'ESTE ES FALSO');
        this.alertaSercice.alertaInformativa('Tu sesion a finalizado');
        this.navCtrl.navigateRoot('/login');
        return false;
      } else {
        console.log( 'PASO 2 >> ' + 'ESTE ES VERDADERO');
        return true;
      }
    }
  }

  public setAuxEst(valor: boolean) {
    this.auxEst = valor;
  }
  public getAuxEst() {
    return this.auxEst;
  }
  
}
