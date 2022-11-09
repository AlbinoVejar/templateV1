import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
import Axios from 'axios';
import { Usuario } from '../models/usuario.model';

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

  async getUsuario(id: number){
    return await (await Axios.get(`${this.API_URL}/${ id }`)).data;
  }

  async addUsuario(body: Usuario){
    return await (await Axios.post(`${this.API_URL}`,body)).data;
  }

  async updateUsuario(id: number, body: Usuario)
  {
    return await (await Axios.put(`${this.API_URL}/${ id }`, body)).data
  }

  async deleteUsuario(id: number){
    return await (await Axios.delete(`${this.API_URL}/${ id }`)).data
  }

}