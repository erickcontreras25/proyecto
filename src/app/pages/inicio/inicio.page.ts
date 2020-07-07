import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiserviService } from 'src/app/services/apiservi.service';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Complejo } from 'src/models/complejo.models';
import { Usuario } from 'src/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/models/user.models';

import * as Mapboxgl from 'mapbox-gl';

// declare var google;
// declare var mapboxgl: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, AfterViewInit {

  constructor(private apiServi: ApiserviService,
              private geolocation: Geolocation,
              private usuarioService: UsuarioService) { }

  todoMap = false;

  complejos: Complejo[] = [];

  private user = {
    id: '',
    email: '',
    nombreUsuario: '',
    edad: 0,
    isAdmin: true
  };


  ngOnInit() {

    this.user = this.usuarioService.getUsuario();
    // console.log('PASO 4 >> ');
    // console.log(this.user);
    // console.log('PASO 5 >> ' + this.user.isAdmin);

  }


  ngAfterViewInit() {
    this.obtenerComplejos();
  }

  logout() {

    this.usuarioService.logout();

  }

  obtenerComplejos() {
    this.apiServi.getComplejo()
    .subscribe((resp: Complejo[]) => {
      this.complejos = resp;
      this.loadMap();
    });
  }

  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    Mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2syMDIwIiwiYSI6ImNrODlyYnhiZzA5ejQzbXFuMWI2Z2sxd24ifQ.gEkvgi98ddKvs34g2icOBg';
    const map = new Mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ myLatLng.lng, myLatLng.lat ],
    zoom: 11
    });
    const marker = new Mapboxgl.Marker().setLngLat( [ myLatLng.lng, myLatLng.lat ] ).addTo( map );

    let markers: any[] = [];
    let valor = 0;
    // console.log(this.complejos);
    for (let i = 0; i < this.complejos.length; i++) {

      if (this.complejos[i].longitud != null && this.complejos[i].latitud != null) {

      const popup = new Mapboxgl.Popup()
      .setHTML('<h3 style="color: black;">' + this.complejos[i].nombre + '</h3>');

      markers[valor] = new Mapboxgl.Marker({color: 'green'})
      .setLngLat([this.complejos[i].longitud, this.complejos[i].latitud])
      .setPopup(popup)
      .addTo(map);

      valor++;


        }

    }

    
  }

}
