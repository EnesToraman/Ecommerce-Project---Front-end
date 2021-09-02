import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment-service/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public commentList: Comment[] = [];
  public name: string = "";
  public email: string = "";
  public comment: string = "";

  constructor(private commentService: CommentService) {
    this.commentService.getComment().subscribe(commentList => {
      this.commentList = commentList;
    })
  }

  ngOnInit(): void { }


  findName(event: any): void{
    this.name = event.target.value;
  }

  findEmail(event: any): void{
    this.email = event.target.value;
  }

  findComment(event: any): void{
    this.comment = event.target.value;
  }

  postComment(){
    console.log(this.email);
    console.log(this.name);
    console.log(this.comment);
    this.commentService.postComment(this.name, this.email, this.comment).subscribe();
  }

}
