import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';
import { Complejo } from 'src/models/complejo.models';
import { error } from 'protractor';


@Component({
  selector: 'app-complejo',
  templateUrl: './complejo.page.html',
  styleUrls: ['./complejo.page.scss'],
})
export class ComplejoPage implements OnInit {


  complejos: Complejo[] = [];



  complejo = {
    idComplejo: 0,
    nombre: '',
    localidad: '',
    cantCanchas: 0,
    idAdmin: 0
  };

  // aux: Complejo;

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('EL SERVICIO SI SIRVE', resp);
    });
  }

  obtenerComplejoId() {
    this.apiServi.getComplejoId(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('EJECUTADO CON EXITO');
    });
  }


  crearComplejo() {
    this.metodoPos();
    }

    metodoPos() {
    this.apiServi.postComplejo(this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.complejo = {
        idComplejo: 0,
        nombre: '',
        localidad: '',
        cantCanchas: 0,
        idAdmin: 0
      };
      window.alert('AGREGADO');
    },
    (error) => {
      console.log('ESTE ES EL ERROR', error);
    }
    );
  }



  modificarComplejo() {
    this.apiServi.putComplejo(this.complejo.idComplejo, this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.complejo = {
        idComplejo: 0,
        nombre: '',
        localidad: '',
        cantCanchas: 0,
        idAdmin: 0
      };
      window.alert('ACTUALIZADO CON EXITO');
    },
    (error) => {
      console.log(error);
    }
    );
  }


  eliminarComplejo() {
    this.apiServi.deleteComplejo(this.complejo.idComplejo)
    .subscribe( resp => {
      console.log('ELIMINADO CON EXITO');
    });
  }



}
