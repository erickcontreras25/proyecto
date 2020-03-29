import { Component, OnInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Complejo } from 'src/models/complejo.models';

declare var google;
declare var mapboxgl: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private apiServi: ApiserviService, private geolocation: Geolocation) { }

  hola: Date;
  aux1;
  aux2;

  complejos: Complejo[] = [];
  complejo = {
    idComplejo: 0,
    nombre: null,
    localidad: null,
    foto: null,
    estado: null,
    idAdmin: null
  };


  ngOnInit() {

    const lat = 15.5;
    const lng =  -88.0333;

    this.aux1 = this.apiServi.getAuxUsu();
    this.aux2 = this.apiServi.getAuxEst();
    this.loadMap();
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2syMDIwIiwiYSI6ImNrODlyYnhiZzA5ejQzbXFuMWI2Z2sxd24ifQ.gEkvgi98ddKvs34g2icOBg';
    // const map = new mapboxgl.Map({
    // container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11',
    // center: [ lng, lat ],
    // zoom: 12
    // });

    // const marker = new mapboxgl.Marker()
    //     .setLngLat( [ lng, lat ] )
    //     .addTo( map );


  }



  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2syMDIwIiwiYSI6ImNrODlyYnhiZzA5ejQzbXFuMWI2Z2sxd24ifQ.gEkvgi98ddKvs34g2icOBg';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ myLatLng.lng, myLatLng.lat ],
    zoom: 12
    });
    const marker = new mapboxgl.Marker()
        .setLngLat( [ myLatLng.lng, myLatLng.lat ] )
        .addTo( map );

    const popup = new mapboxgl.Popup()
        .setHTML('<h3>Soccer</p>');

    const marker2 = new mapboxgl.Marker()
        .setLngLat( [ -88.034648, 15.525479 ] )
        .setPopup(popup)
        .addTo( map );

    const popup1 = new mapboxgl.Popup()
        .setHTML('<h3>Tiki</p>');

    const marker3 = new mapboxgl.Marker()
        .setLngLat( [ -88.013182, 15.534694 ] )
        .setPopup(popup1)
        .addTo( map );
    // console.log(myLatLng);
    // const mapEle: HTMLElement = document.getElementById('map');
    // const map = new google.maps.Map(mapEle, {
    //   center: myLatLng,
    //   zoom: 12
    // });
  }

}
