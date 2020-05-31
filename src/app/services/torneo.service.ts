import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Torneo } from 'src/models/torneo.models';
import { TorneoEquipo } from 'src/models/torneoEquipo.models';
import { UsuarioService } from './usuario.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private url = 'https://conmigo.armalapotra.com/api';

  constructor(private http: HttpClient,
              private storage: Storage,
              private usuarioSer: UsuarioService) { }


  getTorneos() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneo`, {headers: tokenHeaders});
  }

  getTorneoxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneo/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getTorneooId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneo/${id}`, {headers: tokenHeaders});
  }
  
  postTorneo(torneo: Torneo) {
    return this.http.post(`${this.url}/torneo`, torneo, {responseType: 'text'});
  }

  putTorneo(id: number, torneo: Torneo) {
    return this.http.put(`${this.url}/torneo/${id}`, torneo, {responseType: 'text'});
  }
  
  deleteTorneo(id: number) {
    return this.http.delete(`${this.url}/torneo/${id}`);
  }





  getTorneoEquipo() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneoEquipo`, {headers: tokenHeaders});
  }

  getTorneoEquipoxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneoEquipo/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getTorneoEquipoId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${this.url}/torneoEquipo/${id}`, {headers: tokenHeaders});
  }

  postTorneoEquipo(torneoEquipo: TorneoEquipo) {
    return this.http.post(`${this.url}/torneoEquipo`, torneoEquipo, {responseType: 'text'});
  }

  deleteTorneoEquipo(idT, idE) {
    return this.http.delete(`${this.url}/torneoEquipo/${idT}/${idE}`, {responseType: 'text'});
  }

}
