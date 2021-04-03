import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<User[]>(this.url);
  }
}
