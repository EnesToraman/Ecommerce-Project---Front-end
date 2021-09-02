import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment(): Observable<Comment[]>{
    return this.http.get<Comment[]>('http://localhost:8080/comments')
  }

  postComment(name: string, email: string, comment: string){
    const headers = { 'content-type': 'application/json'};
    const payload = {name: name, email: email, comment: comment}
    return this.http.post('http://localhost:8080/comments', payload, {'headers': headers})
  }
}
