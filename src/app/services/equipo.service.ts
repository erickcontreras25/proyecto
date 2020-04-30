import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from 'src/models/equipo.models';
import { EquipoUser } from 'src/models/equipoUser.models';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private url = 'https://localhost:44381/api';

  constructor(private http: HttpClient) { }


  getEquipos() {
    return this.http.get(`${this.url}/equipo`);
  }

  getEquipoxUsuario(n1: string) {
    return this.http.get(`${this.url}/equipo/p?n1=${n1}`);
  }

  getEquipoId(id: number) {
    return this.http.get(`${this.url}/equipo/${id}`);
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




  getEquipoUser() {
    return this.http.get(`${this.url}/equipoUser`);
  }

  getEquipoUserxUsuario(n1: string) {
    return this.http.get(`${this.url}/equipoUser/p?n1=${n1}`);
  }

  getEquipoUserId(id: number) {
    return this.http.get(`${this.url}/equipoUser/${id}`);
  }

  postEquipoUser(equipoUser: EquipoUser) {
    return this.http.post(`${this.url}/equipoUser`, equipoUser, {responseType: 'text'});
  }

  deleteEquipoUser(id, idu) {
    return this.http.delete(`${this.url}/equipoUser/${id}/${idu}`, {responseType: 'text'});
  }


}
