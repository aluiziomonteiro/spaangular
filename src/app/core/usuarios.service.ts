import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly url = 'http://localhost:3000/usuario/';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(this.url);
  }
}
