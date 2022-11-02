import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
import Axios from 'axios';

@Injectable({providedIn: 'root'})
export class UsuarioService {
  usuarios: any[]=[];
  private readonly API_URL = "http://localhost:3000/usuarios";
  constructor(
    // private http: HttpClient
  ) { }

  async getUsuarios(){
    return await (await Axios.get(`${this.API_URL}`)).data; // AXIOS method
    // const observable = this.http.get(`${this.API_URL}`); // Native Http Client
    // return await lastValueFrom(observable);
  }
}