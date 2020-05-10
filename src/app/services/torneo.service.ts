import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Torneo } from 'src/models/torneo.models';
import { TorneoEquipo } from 'src/models/torneoEquipo.models';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private url = 'https://localhost:44381/api';

  constructor(private http: HttpClient) { }


  getTorneos() {
    return this.http.get(`${this.url}/torneo`);
  }

  getTorneoxUsuario(n1: string) {
    return this.http.get(`${this.url}/torneo/p?n1=${n1}`);
  }

  getTorneooId(id: number) {
    return this.http.get(`${this.url}/torneo/${id}`);
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
    return this.http.get(`${this.url}/torneoEquipo`);
  }

  getTorneoEquipoxUsuario(n1: string) {
    return this.http.get(`${this.url}/torneoEquipo/p?n1=${n1}`);
  }

  getTorneoEquipoId(id: number) {
    return this.http.get(`${this.url}/torneoEquipo/${id}`);
  }

  postTorneoEquipo(torneoEquipo: TorneoEquipo) {
    return this.http.post(`${this.url}/torneoEquipo`, torneoEquipo, {responseType: 'text'});
  }

  deleteTorneoEquipo(idT, idE) {
    return this.http.delete(`${this.url}/torneoEquipo/${idT}/${idE}`, {responseType: 'text'});
  }

}
