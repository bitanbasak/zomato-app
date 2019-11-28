import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/find';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authenticationStatus = false;

  constructor(private httpClient: HttpClient) { }

  authenticateUser(email: string, password: string) {
    var user = { email, password };
    this.httpClient.get('http://localhost:3000/users').subscribe(
      users => {
        users.find(element => {

        });
        console.log(users);
        // users.find(euser => (euser.email === user.email) && (euser.password === user.password))
      }
    );
  }

  isUserAuthenticated() {
    return this.authenticationStatus;
  }

  registerUser(email: string, password: string): Observable<any> {
    var user = { email, password };
    return this.httpClient.post('http://localhost:3000/users', user);
  }
}
