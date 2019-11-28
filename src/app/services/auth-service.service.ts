import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn = false;

  constructor(private httpClient: HttpClient) { }

  authenticateUser(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('http://localhost:3000/users');
  }

  setBearerToken(id: number) {
    sessionStorage.setItem('id', id.toString());
  }

  getBearerToken() {
    return sessionStorage.getItem('id');
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        if (sessionStorage.getItem('email')) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
    return promise;
  }

  logoutUser() {
    sessionStorage.removeItem('id');
  }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/users', user);
  }

  getUserData(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`);
  }

  updateUserData(user: User): Observable<User> {
    return this.httpClient.put<User>(`http://localhost:3000/users/${user.id}`, user);
  }
}
