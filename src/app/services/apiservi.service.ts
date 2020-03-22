import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { Usuario } from 'src/models/usuario.models';
import { Reservacion } from 'src/models/reservacion.models';
import { Admin } from 'src/models/admin.models';
import { Equipo } from 'src/models/equipo.models';

@Injectable({
  providedIn: 'root'
})
export class ApiserviService {

  private auxUsu: number;
  private auxNom: string;
  private auxEst: boolean;

  constructor(private http: HttpClient) { }

  // getCanchas(){
  //   return this.http.get('https://apibackend2019.herokuapp.com/api/Complejos');
  // }

  public setAuxUsu(valor: number) {
    this.auxUsu = valor;
  }
  public getAuxUsu() {
    return this.auxUsu;
  }
  public setAuxEst(valor: boolean) {
    this.auxEst = valor;
  }
  public getAuxEst() {
    return this.auxEst;
  }
  public setAuxNom(valor: string) {
    this.auxNom = valor;
  }
  public getAuxNom() {
    return this.auxNom;
  }


  getComplejo() {
    return this.http.get('https://localhost:44381/api/complejo');
  }
  getComplejoId(id: number) {
    return this.http.get(`https://localhost:44381/api/complejo/${id}`);
  }
  getComplejoAdmin(n1: number) {
    return this.http.get(`https://localhost:44381/api/complejo/p?n1=${n1}`);
  }
  postComplejo(complejo: Complejo) {
    return this.http.post('https://localhost:44381/api/complejo', complejo, {responseType: 'text'});
  }
  putComplejo(id: number, complejo: Complejo) {
    return this.http.put('https://localhost:44381/api/complejo', complejo, {responseType: 'text'});
  }
  deleteComplejo(id: number) {
    return this.http.delete(`https://localhost:44381/api/complejo/${id}`);
  }



  getCancha(n1: number) {
    return this.http.get(`https://localhost:44381/api/cancha?n1=${n1}`);
  }
  getCanchaId(id: number) {
    return this.http.get(`https://localhost:44381/api/cancha/${id}`);
  }
  postCancha(cancha: Cancha) {
    return this.http.post('https://localhost:44381/api/cancha', cancha, {responseType: 'text'});
  }
  putCancha(id: number, cancha: Cancha) {
    return this.http.put('https://localhost:44381/api/cancha', cancha, {responseType: 'text'});
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
    return this.http.post('https://localhost:44381/api/usuario', usuario, {responseType: 'text'});
  }
  putUsuario(id: number, usuario: Usuario) {
    return this.http.put('https://localhost:44381/api/usuario', usuario, {responseType: 'text'});
  }
  deleteUsuario(id: number) {
    return this.http.delete(`https://localhost:44381/api/usuario/${id}`);
  }



  getReservacion(n1: number) {
    return this.http.get(`https://localhost:44381/api/reservacion?n1=${n1}`);
  }
  getReservacionId(id: number) {
    return this.http.get(`https://localhost:44381/api/reservacion/${id}`);
  }
  postReservacion(reservacion: Reservacion) {
    return this.http.post('https://localhost:44381/api/reservacion', reservacion, {responseType: 'text'});
  }
  putReservacion(id: number, reservacion: Reservacion) {
    return this.http.put('https://localhost:44381/api/reservacion', reservacion, {responseType: 'text'});
  }
  deleteReservacion(id: number) {
    return this.http.delete(`https://localhost:44381/api/reservacion/${id}`);
  }


  getAdmin() {
    return this.http.get('https://localhost:44381/api/admin');
  }
  getAdminId(id: number) {
    return this.http.get(`https://localhost:44381/api/admin/${id}`);
  }
  postAdmin(admin: Admin) {
    return this.http.post('https://localhost:44381/api/admin', admin, {responseType: 'text'});
  }
  putAdmin(id: number, admin: Admin) {
    return this.http.put('https://localhost:44381/api/admin', admin, {responseType: 'text'});
  }
  deleteAdmin(id: number) {
    return this.http.delete(`https://localhost:44381/api/admin/${id}`);
  }


  getEquipo() {
    return this.http.get('https://localhost:44381/api/equipo');
  }
  getEquipoId(id: number) {
    return this.http.get(`https://localhost:44381/api/equipo/${id}`);
  }
  getEquipoUsuario(n1: number) {
    return this.http.get(`https://localhost:44381/api/equipo/p?n1=${n1}`);
  }
  postEquipo(equipo: Equipo) {
    return this.http.post('https://localhost:44381/api/equipo', equipo, {responseType: 'text'});
  }
  putEquipo(id: number, equipo: Equipo) {
    return this.http.put('https://localhost:44381/api/equipo', equipo, {responseType: 'text'});
  }
  deleteEquipo(id: number) {
    return this.http.delete(`https://localhost:44381/api/equipo/${id}`);
  }


}
