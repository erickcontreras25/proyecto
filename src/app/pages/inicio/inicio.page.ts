import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private apiServi: ApiserviService, private geolocation: Geolocation) { }

  ngOnInit() {

    this.loadMap();

    // this.apiServi.getComplejo()
    // .subscribe(resp => {
    //   console.log('EL SERVICIO SI SIRVE', resp);
    // });
  }

  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  }

}
