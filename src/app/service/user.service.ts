import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { Usuario } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.HOST}/usuarios`;

  constructor(
    private http: HttpClient 
  ) { }
  
  listar(){ 
    return this.http.get(this.url);
  }

}
