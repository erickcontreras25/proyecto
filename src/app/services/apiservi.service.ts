import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complejo } from 'src/models/complejo.models';

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

  postComplejo(complejo: Complejo) {
    return this.http.post('https://localhost:44381/api/complejo', complejo);
  }

}
