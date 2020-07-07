import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Torneo } from 'src/models/torneo.models';
import { TorneoEquipo } from 'src/models/torneoEquipo.models';
import { UsuarioService } from './usuario.service';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  // private url = 'https://conmigo.armalapotra.com/api';

  constructor(private http: HttpClient,
              private storage: Storage,
              private usuarioSer: UsuarioService) { }


  getTorneos() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneo`, {headers: tokenHeaders});
  }

  getTorneoxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneo/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getTorneoxComplejo(n1: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneo/q?id=${n1}`, {headers: tokenHeaders});
  }

  getTorneooId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneo/${id}`, {headers: tokenHeaders});
  }
  
  postTorneo(torneo: Torneo) {
    return this.http.post(`${URL}/torneo`, torneo, {responseType: 'text'});
  }

  putTorneo(id: number, torneo: Torneo) {
    return this.http.put(`${URL}/torneo/${id}`, torneo, {responseType: 'text'});
  }
  
  deleteTorneo(id: number) {
    return this.http.delete(`${URL}/torneo/${id}`);
  }





  getTorneoEquipo() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneoEquipo`, {headers: tokenHeaders});
  }

  getTorneoEquipoxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneoEquipo/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getTorneoEquipoId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/torneoEquipo/${id}`, {headers: tokenHeaders});
  }

  postTorneoEquipo(torneoEquipo: TorneoEquipo) {
    return this.http.post(`${URL}/torneoEquipo`, torneoEquipo, {responseType: 'text'});
  }

  deleteTorneoEquipo(idT, idE) {
    return this.http.delete(`${URL}/torneoEquipo/${idT}/${idE}`, {responseType: 'text'});
  }

}
