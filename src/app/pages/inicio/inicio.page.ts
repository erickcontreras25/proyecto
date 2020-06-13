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
  // complejo = {
  //   idComplejo: 0,
  //   nombre: null,
  //   localidad: null,
  //   foto: null,
  //   estado: null,
  //   idAdmin: null
  // };

  // perfil: User;

  private user = {
    id: '',
    email: '',
    nombreUsuario: '',
    edad: 0,
    isAdmin: true
  };


  ngOnInit() {

    // const lat = 15.5;
    // const lng =  -88.0333;

    

    
    this.user = this.usuarioService.getUsuario();
    // console.log('PASO 4 >> ');
    console.log(this.user);
    // console.log('PASO 5 >> ' + this.user.isAdmin);
    // this.aux2 = this.apiServi.getAuxEst();

  }

  ngAfterViewInit() {
    this.obtenerComplejos();
    console.log('ESTA RECARGANDO');
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
    console.log(this.complejos);
    for (let i = 0; i < this.complejos.length; i++) {

      if (this.complejos[i].longitud != null && this.complejos[i].latitud != null) {
      
      const popup = new Mapboxgl.Popup()
      .setHTML('<h3 style="color: black;">' + this.complejos[i].nombre + '</h3>');

      // console.log(this.complejos[i].nombre);

      // const marker = new mapboxgl.Marker()
      //   .setLngLat( [ this.complejos[i].longitud, this.complejos[i].latitud] )
      //   .setPopup(popup)
      //   .addTo( map );

      markers[valor] = new Mapboxgl.Marker({color: 'green'})
      .setLngLat([this.complejos[i].longitud, this.complejos[i].latitud])
      .setPopup(popup)
      .addTo(map);

      valor++;


        }

      
    }
    // const marker = new mapboxgl.Marker()
    //     .setLngLat( [ myLatLng.lng, myLatLng.lat ] )
    //     .addTo( map );

    // const popup = new mapboxgl.Popup()
    //     .setHTML('<h3>Soccer</p>');

    // const marker2 = new mapboxgl.Marker()
    //     .setLngLat( [ -88.034648, 15.525479 ] )
    //     .setPopup(popup)
    //     .addTo( map );

    // const popup1 = new mapboxgl.Popup()
    //     .setHTML('<h3>Tiki</p>');

    // const marker3 = new mapboxgl.Marker()
    //     .setLngLat( [ -88.013182, 15.534694 ] )
    //     .setPopup(popup1)
    //     .addTo( map );
    // console.log(myLatLng);
    // const mapEle: HTMLElement = document.getElementById('map');
    // const map = new google.maps.Map(mapEle, {
    //   center: myLatLng,
    //   zoom: 12
    // });
    
  }

}
