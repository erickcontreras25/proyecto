import { Component, OnInit } from '@angular/core';
import { Complejo } from 'src/models/complejo.models';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-lista-complejos',
  templateUrl: './lista-complejos.page.html',
  styleUrls: ['./lista-complejos.page.scss'],
})
export class ListaComplejosPage implements OnInit {

  complejos: Complejo[] = [];

  complejo = {
    idComplejo: 0,
    nombre: null,
    localidad: null,
    foto: null,
    estado: null,
    idAdmin: null
  };


  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {

    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      console.log('SERVICIO', resp);
    });

  }

}
