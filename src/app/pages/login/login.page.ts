import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Usuario } from 'src/models/usuario.models';
import { Admin } from 'src/models/admin.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pAdmin: any[] = [{
    nombre: '',
    email: '',
    password: '',
    rol: true
  }];

  prueba: any[] = [{
    idUsuario: '',
    nombre: '',
    nombreUsuario: '',
    edad: 0,
    email: '',
    password: '',
    rol: false,
  }];

  auxNombre: string = '';
  auxPassword: string = '';
  auxEstado: boolean = false;
  estado: number = 0;
  seleccion;

  constructor(public navCtr1: NavController, public apiServi: ApiserviService) { }


  ngOnInit() {
    this.apiServi.getUsuario()
    .subscribe((resp: any[]) => {
      this.prueba = resp;
      console.log('ESTA ES LA PRUEBA', this.prueba);
    });
    this.apiServi.getAdmin()
    .subscribe((resp: any[]) => {
      this.pAdmin = resp;
      console.log('EL SERVICIO SI SIRVE', resp);
    });
  }

  goInicio(): void {
    for (let index = 0; index < this.prueba.length; index++) {
        if (this.auxNombre === this.prueba[index].email && this.auxPassword === this.prueba[index].password) {
          this.navCtr1.navigateForward('/inicio');
          this.apiServi.setAuxUsu(this.prueba[index].idUsuario);
          this.apiServi.setAuxEst(this.prueba[index].rol);
          this.apiServi.setAuxNom(this.prueba[index].nombreUsuario);
        }
    }
    for (let index = 0; index < this.pAdmin.length; index++) {
      if (this.auxNombre === this.pAdmin[index].email && this.auxPassword === this.pAdmin[index].password) {
        this.navCtr1.navigateForward('/inicio');
        this.apiServi.setAuxUsu(this.pAdmin[index].idAdmin);
        this.apiServi.setAuxEst(this.pAdmin[index].rol);
        this.apiServi.setAuxNom(this.pAdmin[index].nombreUsuario);
      }
  }
  }



}
