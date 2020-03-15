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
    latitud: 0.0,
    longitud: 0.0,
    cantCanchas: 0
  };

  aux: Complejo;

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('EL SERVICIO SI SIRVE', resp);
    });
  }

  crearComplejo() {
    console.log('FORM SUBMIT');
    console.log(this.complejo);
    this.metodoPos();
    }

    metodoPos() {
    this.apiServi.postComplejo(this.complejo)
    .subscribe((data) => {
      this.complejos.push(this.complejo);
      this.complejo = {
        idComplejo: 0,
        nombre: '',
        latitud: 0.0,
        longitud: 0.0,
        cantCanchas: 0
      };
      window.alert('AGREGADO');
    },
    (error) => {console.log(error)
    }
    );
  }
  

}
