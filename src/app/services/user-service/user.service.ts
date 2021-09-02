import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {}

  postUser(email: string, password: string, isEmailAllowed: boolean): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const payload = {email: email, password: password, isEmailAllowed: isEmailAllowed};
    return this.http.post('http://localhost:8080/user', payload, {'headers': headers})
  }

}
