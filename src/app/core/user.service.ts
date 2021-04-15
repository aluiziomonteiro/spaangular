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

  listById(id:number): Observable<User> {
    return this.http.get<User>(this.url + id);
  }

  list() {
    return this.http.get<User[]>(this.url);
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }

  updateUser(user: User, id: number): Observable<User>{
    return this.http.put<User>(this.url + id, user);
  }
}
