import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated : boolean = false;

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string, callback: Function) {

    const headers = new HttpHeaders(email && password ? {
      authorization: 'Basic' + btoa(email + ':' + password)
    } : {});

    return callback && callback();
  }

}