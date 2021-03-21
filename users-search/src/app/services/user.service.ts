import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://api.github.com';


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getSingleUser(userName: string) {
    return this.http.get<User>(`${this.url}/users/${userName}`);
  }

}





