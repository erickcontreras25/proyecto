import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { Usuario } from 'src/models/usuario.models';
import { Reservacion } from 'src/models/reservacion.models';

@Injectable({
  providedIn: 'root'
})
export class ApiserviService {

  constructor(private http: HttpClient) { }

  // getCanchas(){
  //   return this.http.get('https://apibackend2019.herokuapp.com/api/Complejos');
  // }

  getComplejo() {
    return this.http.get('https://localhost:44381/api/complejo');
  }

  getComplejoId(id: number) {
    return this.http.get(`https://localhost:44381/api/complejo/${id}`);
  }

  postComplejo(complejo: Complejo) {
    return this.http.post('https://localhost:44381/api/complejo', complejo);
  }

  putComplejo(id: number, complejo: Complejo) {
    return this.http.put('https://localhost:44381/api/complejo', complejo);
  }

  deleteComplejo(id: number) {
    return this.http.delete(`https://localhost:44381/api/complejo/${id}`);
  }



  getCancha() {
    return this.http.get('https://localhost:44381/api/cancha');
  }

  getCanchaId(id: number) {
    return this.http.get(`https://localhost:44381/api/cancha/${id}`);
  }

  postCancha(cancha: Cancha) {
    return this.http.post('https://localhost:44381/api/cancha', cancha);
  }

  putCancha(id: number, cancha: Cancha) {
    return this.http.put('https://localhost:44381/api/cancha', cancha);
  }

  deleteCancha(id: number) {
    return this.http.delete(`https://localhost:44381/api/cancha/${id}`);
  }



  getUsuario() {
    return this.http.get('https://localhost:44381/api/usuario');
  }

  getUsuarioId(id: number) {
    return this.http.get(`https://localhost:44381/api/usuario/${id}`);
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('https://localhost:44381/api/usuario', usuario);
  }

  putUsuario(id: number, usuario: Usuario) {
    return this.http.put('https://localhost:44381/api/usuario', usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`https://localhost:44381/api/usuario/${id}`);
  }



  getReservacion() {
    return this.http.get('https://localhost:44381/api/reservacion');
  }

  getReservacionId(id: number) {
    return this.http.get(`https://localhost:44381/api/reservacion/${id}`);
  }

  postReservacion(reservacion: Reservacion) {
    return this.http.post('https://localhost:44381/api/reservacion', reservacion);
  }

  putReservacion(id: number, reservacion: Reservacion) {
    return this.http.put('https://localhost:44381/api/reservacion', reservacion);
  }

  deleteReservacion(id: number) {
    return this.http.delete(`https://localhost:44381/api/reservacion/${id}`);
  }


}
