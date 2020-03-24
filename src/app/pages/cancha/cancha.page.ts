import { Component, OnInit } from '@angular/core';
import { Cancha } from 'src/models/cancha.models';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.page.html',
  styleUrls: ['./cancha.page.scss'],
})
export class CanchaPage implements OnInit {


  canchas: Cancha[] = [];
  complejos: Complejo[] = [];

  idUsu;

  cancha = {
    idCancha: 0,
    precio: 0,
    estado: '',
    idComplejo: 0
  };


  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.idUsu = this.apiServi.getAuxUsu();

    this.apiServi.getComplejoAdmin(this.idUsu)
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO', resp);
    });
  }

  // obtenerCancha() {
  //   this.apiServi.getCancha()
  //   .subscribe((resp: Cancha[]) => {
  //     this.canchas = resp;
  //     console.log('EL SERVICIO SI SIRVE', resp);
  //   });
  // }

  obtenerCanchaId() {
    this.apiServi.getCanchaId(this.cancha.idCancha)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }

  agregarCancha() {
    this.apiServi.postCancha(this.cancha)
    .subscribe((data) => {
      this.canchas.push(this.cancha);
      this.cancha = {
        idCancha: 0,
        precio: 0,
        estado: '',
        idComplejo: 0
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log(error);
    }
    );
  }

  modificarCancha() {
    this.apiServi.putCancha(this.cancha.idCancha, this.cancha)
    .subscribe((data) => {
      this.canchas.push(this.cancha);
      this.cancha = {
        idCancha: 0,
        precio: 0,
        estado: '',
        idComplejo: 0
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



}
