import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from 'src/models/equipo.models';
import { EquipoUser } from 'src/models/equipoUser.models';
import { UsuarioService } from './usuario.service';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  // private url = 'https://conmigo.armalapotra.com/api';

  constructor(private http: HttpClient,
              private storage: Storage,
              private usuarioSer: UsuarioService) { }


  getEquipos() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipo`, {headers: tokenHeaders});
  }

  getEquipoxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipo/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getEquipoId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipo/${id}`, {headers: tokenHeaders});
  }
  
  postEquipo(equipo: Equipo) {
    return this.http.post(`${URL}/equipo`, equipo, {responseType: 'text'});
  }

  putEquipo(id: number, equipo: Equipo) {
    return this.http.put(`${URL}/equipo/${id}`, equipo, {responseType: 'text'});
  }
  
  deleteEquipo(id: number) {
    return this.http.delete(`${URL}/equipo/${id}`);
  }




  getEquipoUser() {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipoUser`, {headers: tokenHeaders});
  }

  getEquipoUserxUsuario(n1: string) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipoUser/p?n1=${n1}`, {headers: tokenHeaders});
  }

  getEquipoUserId(id: number) {
    const tokenHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + this.usuarioSer.token});
    return this.http.get(`${URL}/equipoUser/${id}`, {headers: tokenHeaders});
  }

  postEquipoUser(equipoUser: EquipoUser) {
    return this.http.post(`${URL}/equipoUser`, equipoUser, {responseType: 'text'});
  }

  deleteEquipoUser(id, idu) {
    return this.http.delete(`${URL}/equipoUser/${id}/${idu}`, {responseType: 'text'});
  }


}
