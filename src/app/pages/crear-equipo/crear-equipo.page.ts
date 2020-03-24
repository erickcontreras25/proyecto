import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/models/equipo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.page.html',
  styleUrls: ['./crear-equipo.page.scss'],
})
export class CrearEquipoPage implements OnInit {

  equipos: Equipo[] = [];
  idEquipo;

  equipo = {
    nombre: '',
    idUsuario: 0
  };

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.equipo.idUsuario = this.apiServi.getAuxUsu();
  }

  obtenerEquipo() {
    this.apiServi.getEquipo()
    .subscribe((resp: Equipo[]) => {
      this.equipos = resp;
      console.log('SERVICIO ', resp);
    });
  }

  obtenerEquipoId() {
    this.apiServi.getEquipoId(this.idEquipo)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }
  crearEquipo() {
    this.apiServi.postEquipo(this.equipo)
    .subscribe((data) => {
      this.equipos.push(this.equipo);
      this.equipo = {
        nombre: '',
        idUsuario: 0
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log('ERROR: ', error);
    }
    );
  }
  modificarEquipo() {
    this.apiServi.putEquipo(this.idEquipo, this.equipo)
    .subscribe((data) => {
      this.equipos.push(this.equipo);
      this.equipo = {
        nombre: '',
        idUsuario: 0
      };
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }
  eliminarEquipo() {
    this.apiServi.deleteEquipo(this.idEquipo)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }


}
