import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../test-api/model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8100/users');
  }

  addUsers(userData: User): Observable<any> {
    return this.http.post('http://localhost:8100/users', userData);
  }
}
