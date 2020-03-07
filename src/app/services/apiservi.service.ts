import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviService {

  constructor(private http: HttpClient) { }

  getCanchas(){
    return this.http.get('http://localhost:3000/api/Complejos');
  }
}
