import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/models/equipo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  equipos: Equipo[] = [];
  idEquipo;

  equipo = {
    nombre: '',
    idUsuario: 0
  };

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.equipo.idUsuario = this.apiServi.getAuxUsu();

    this.apiServi.getEquipo()
      .subscribe((resp: Equipo[]) => {
        this.equipos = resp;
        console.log('SERVICIO ', resp);
      });
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
