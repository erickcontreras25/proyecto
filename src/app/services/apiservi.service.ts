import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complejo } from 'src/models/complejo.models';
import { Cancha } from 'src/models/cancha.models';
import { Usuario } from 'src/models/usuario.models';
import { Reservacion } from 'src/models/reservacion.models';
import { Admin } from 'src/models/admin.models';
import { Equipo } from 'src/models/equipo.models';
import { Storage } from '@ionic/storage';
import { UsuarioService } from './usuario.service';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiserviService {

  private auxUsu: number;
  private auxNom: string;
  private auxEst: boolean;
  // private url = 'https://conmigo.armalapotra.com/api';
  token: string = null;

  constructor(private http: HttpClient,
              private storage: Storage,
              private usuarioSer: UsuarioService) { }

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
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/complejo`, {headers: tokenHeaders});
  }
  getComplejoId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/complejo/${id}`, {headers: tokenHeaders});
  }
  getComplejoAdmin(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/complejo/p?n1=${n1}`, {headers: tokenHeaders});
  }
  getComplejoEstado(n1: boolean) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/complejo/q?n1=${n1}`, {headers: tokenHeaders});
  }
  postComplejo(complejo: Complejo) {
    return this.http.post(`${URL}/complejo`, complejo, {responseType: 'text'});
  }
  putComplejo(id: number, complejo: Complejo) {
    return this.http.put(`${URL}/complejo/${id}`, complejo, {responseType: 'text'});
  }
  deleteComplejo(id: number) {
    return this.http.delete(`${URL}/complejo/${id}`);
  }




  getCanchaComplejo(n1: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/cancha/p?n1=${n1}`, {headers: tokenHeaders});
  }
  getCanchaId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/cancha/${id}`, {headers: tokenHeaders});
  }
  postCancha(cancha: Cancha) {
    return this.http.post(`${URL}/cancha`, cancha, {responseType: 'text'});
  }
  putCancha(id: number, cancha: Cancha) {
    return this.http.put(`${URL}/cancha/${id}`, cancha, {responseType: 'text'});
  }
  deleteCancha(id: number) {
    return this.http.delete(`${URL}/cancha/${id}`);
  }



  



  getReservaciones() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/reservacion`, {headers: tokenHeaders});
  }

  getReservacionXUser(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/reservacion/p?n1=${n1}`, {headers: tokenHeaders});
  }
  getReservacionComplejo(n1: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/reservacion/q?n1=${n1}`, {headers: tokenHeaders});
  }
  getReservacionId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/reservacion/${id}`, {headers: tokenHeaders});
  }
  postReservacion(reservacion: Reservacion) {
    return this.http.post(`${URL}/reservacion`, reservacion, {responseType: 'text'});
  }
  putReservacion(id: number, reservacion: Reservacion) {
    return this.http.put(`${URL}/reservacion/${id}`, reservacion, {responseType: 'text'});
  }
  deleteReservacion(id: number) {
    return this.http.delete(`${URL}/reservacion/${id}`);
  }




}
