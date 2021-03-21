import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://api.github.com/users';


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

}



// getUsers() {
//   // let request;
//   // this.http.get(this.url).subscribe((resp) => {
//   //   request = resp;

//   // })
//   // return request;

  
//   //return this.http.get(this.url);
//   const a = this.http.get(this.url).pipe(map(resp => resp['data']));
//   console.log("A: ", a)

//   const b = this.http.get(this.url);
//   console.log("B: ", b)

//   return this.http.get(this.url).pipe(map(resp => resp['data']));
// }



