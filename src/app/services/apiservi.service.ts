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
  private url = 'https://localhost:44381/api';

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
    return this.http.get(`${this.url}/complejo`);
  }
  getComplejoId(id: number) {
    return this.http.get(`${this.url}/complejo/${id}`);
  }
  getComplejoAdmin(n1: number) {
    return this.http.get(`${this.url}/complejo/p?n1=${n1}`);
  }
  postComplejo(complejo: Complejo) {
    return this.http.post(`${this.url}/complejo`, complejo, {responseType: 'text'});
  }
  putComplejo(id: number, complejo: Complejo) {
    return this.http.put(`${this.url}/complejo`, complejo, {responseType: 'text'});
  }
  deleteComplejo(id: number) {
    return this.http.delete(`${this.url}/complejo/${id}`);
  }



  getCancha(n1: number) {
    return this.http.get(`${this.url}/cancha?n1=${n1}`);
  }
  getCanchaId(id: number) {
    return this.http.get(`${this.url}/cancha/${id}`);
  }
  postCancha(cancha: Cancha) {
    return this.http.post(`${this.url}/cancha`, cancha, {responseType: 'text'});
  }
  putCancha(id: number, cancha: Cancha) {
    return this.http.put(`${this.url}/cancha`, cancha, {responseType: 'text'});
  }
  deleteCancha(id: number) {
    return this.http.delete(`${this.url}/cancha/${id}`);
  }



  getUsuario() {
    return this.http.get(`${this.url}/usuario`);
  }
  getUsuarioId(id: number) {
    return this.http.get(`${this.url}/usuario/${id}`);
  }
  postUsuario(usuario: Usuario) {
    return this.http.post(`${this.url}/usuario`, usuario, {responseType: 'text'});
  }
  putUsuario(id: number, usuario: Usuario) {
    return this.http.put(`${this.url}/usuario`, usuario, {responseType: 'text'});
  }
  deleteUsuario(id: number) {
    return this.http.delete(`${this.url}/usuario/${id}`);
  }



  getReservacion(n1: number) {
    return this.http.get(`${this.url}/reservacion?n1=${n1}`);
  }
  getReservacionId(id: number) {
    return this.http.get(`${this.url}/reservacion/${id}`);
  }
  postReservacion(reservacion: Reservacion) {
    return this.http.post(`${this.url}/reservacion`, reservacion, {responseType: 'text'});
  }
  putReservacion(id: number, reservacion: Reservacion) {
    return this.http.put(`${this.url}/reservacion`, reservacion, {responseType: 'text'});
  }
  deleteReservacion(id: number) {
    return this.http.delete(`${this.url}/reservacion/${id}`);
  }


  getAdmin() {
    return this.http.get(`${this.url}/admin`);
  }
  getAdminId(id: number) {
    return this.http.get(`${this.url}/admin/${id}`);
  }
  postAdmin(admin: Admin) {
    return this.http.post(`${this.url}/admin`, admin, {responseType: 'text'});
  }
  putAdmin(id: number, admin: Admin) {
    return this.http.put(`${this.url}/admin`, admin, {responseType: 'text'});
  }
  deleteAdmin(id: number) {
    return this.http.delete(`${this.url}/admin/${id}`);
  }


  getEquipo() {
    return this.http.get(`${this.url}/equipo`);
  }
  getEquipoId(id: number) {
    return this.http.get(`${this.url}/equipo/${id}`);
  }
  getEquipoUsuario(n1: number) {
    return this.http.get(`${this.url}/equipo/p?n1=${n1}`);
  }
  postEquipo(equipo: Equipo) {
    return this.http.post(`${this.url}/equipo`, equipo, {responseType: 'text'});
  }
  putEquipo(id: number, equipo: Equipo) {
    return this.http.put(`${this.url}/equipo`, equipo, {responseType: 'text'});
  }
  deleteEquipo(id: number) {
    return this.http.delete(`${this.url}/equipo/${id}`);
  }


}
