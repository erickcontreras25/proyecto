import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Equipo } from 'src/models/equipo.models';
import { User } from 'src/models/user.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { AlertaServiceService } from 'src/app/services/alerta-service.service';
import { EquipoUser } from 'src/models/equipoUser.models';

@Component({
  selector: 'app-unirme-equipo',
  templateUrl: './unirme-equipo.page.html',
  styleUrls: ['./unirme-equipo.page.scss'],
})
export class UnirmeEquipoPage implements OnInit {
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;
  perfil: User;

  equipos: Equipo[] = [];
  equipo: Equipo = new Equipo(0, '', 0, '');

  equipoUsers: EquipoUser[] = [];
  equipoUser: EquipoUser = new EquipoUser(0, '');



  constructor(private usuarioService: UsuarioService,
              private equipoService: EquipoService,
              private navCtrl: NavController,
              private alertaService: AlertaServiceService) { }

  ngOnInit() {
    this.perfil = this.usuarioService.getUsuario();

    this.perfil = this.usuarioService.getUsuario();
    console.log(this.perfil.id);

    this.slides.lockSwipes(true);

    this.obtenerTodosEquipos();
  }


  obtenerTodosEquipos() {
    this.equipoService.getEquipos()
    .subscribe((resp: Equipo[]) => {
      this.equipos = resp;
    });
  }

  uniraEquipo() {
    this.equipoUser.userId = this.perfil.id;
    this.equipoService.postEquipoUser(this.equipoUser)
    .subscribe(data => {
      this.equipoUsers.push(this.equipoUser);
      this.alertaService.alertaInformativa('Hecho!!');
      this.navCtrl.navigateRoot('/inicio');
    },
    (error) => {
      // this.alertaService.alertaInformativa('Ya estas unido a este equipo');
      this.alertaService.alertaInformativa(error['error']);
    });
  }

  llenar(id: number) {
    this.equipoUser.equipoId = id;
  }

}
