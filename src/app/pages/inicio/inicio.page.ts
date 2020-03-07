import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private apiServi: ApiserviService) { }

  ngOnInit() {
    this.apiServi.getCanchas()
    .subscribe(resp => {
      console.log('EL SERVICIO SI SIRVE', resp);
    });
  }

}
