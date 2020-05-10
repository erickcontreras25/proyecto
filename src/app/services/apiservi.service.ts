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
  getComplejoAdmin(n1: string) {
    return this.http.get(`${this.url}/complejo/p?n1=${n1}`);
  }
  getComplejoEstado(n1: boolean) {
    return this.http.get(`${this.url}/complejo/q?n1=${n1}`);
  }
  postComplejo(complejo: Complejo) {
    return this.http.post(`${this.url}/complejo`, complejo, {responseType: 'text'});
  }
  putComplejo(id: number, complejo: Complejo) {
    return this.http.put(`${this.url}/complejo/${id}`, complejo, {responseType: 'text'});
  }
  deleteComplejo(id: number) {
    return this.http.delete(`${this.url}/complejo/${id}`);
  }




  getCanchaComplejo(n1: number) {
    return this.http.get(`${this.url}/cancha/p?n1=${n1}`);
  }
  getCanchaId(id: number) {
    return this.http.get(`${this.url}/cancha/${id}`);
  }
  postCancha(cancha: Cancha) {
    return this.http.post(`${this.url}/cancha`, cancha, {responseType: 'text'});
  }
  putCancha(id: number, cancha: Cancha) {
    return this.http.put(`${this.url}/cancha/${id}`, cancha, {responseType: 'text'});
  }
  deleteCancha(id: number) {
    return this.http.delete(`${this.url}/cancha/${id}`);
  }



  



  getReservaciones() {
    return this.http.get(`${this.url}/reservacion`);
  }

  getReservacionXUser(n1: string) {
    return this.http.get(`${this.url}/reservacion/p?n1=${n1}`);
  }
  getReservacionComplejo(n1: number) {
    return this.http.get(`${this.url}/reservacion/q?n1=${n1}`);
  }
  getReservacionId(id: number) {
    return this.http.get(`${this.url}/reservacion/${id}`);
  }
  postReservacion(reservacion: Reservacion) {
    return this.http.post(`${this.url}/reservacion`, reservacion, {responseType: 'text'});
  }
  putReservacion(id: number, reservacion: Reservacion) {
    return this.http.put(`${this.url}/reservacion/${id}`, reservacion, {responseType: 'text'});
  }
  deleteReservacion(id: number) {
    return this.http.delete(`${this.url}/reservacion/${id}`);
  }


  



}
