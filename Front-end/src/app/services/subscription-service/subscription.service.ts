import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http : HttpClient) {}

  postSubscriber(email: string, userAgent: string): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const payload = {email: email, userAgent: userAgent};
    return this.http.post('http://localhost:8080/subscription', payload, {'headers': headers})
  }

}
