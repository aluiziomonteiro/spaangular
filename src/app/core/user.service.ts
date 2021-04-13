import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.url);
  }

  create(user: User): Observable<User>{
    return this.http.post<User> (this.url, user);
  }
}
