import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment-service/comment.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public images = [1, 3, 5,  7, 9, 10].map((n) => `http://127.0.0.1:4200/assets/images/product-${n}.jpg`);

  public quantity: number = 1;
  public commentList: Comment[] = [];
  public name: string = "";
  public email: string = "";
  public comment: string = "";

  constructor(private commentService: CommentService,) {
    this.commentService.getComment().subscribe(commentList => {
      this.commentList = commentList;
    })
  }

  ngOnInit(): void { }

  

  incrementQuantity(): void{
    this.quantity += 1;
  }

  decrementQuantity(): void{
    if(this.quantity > 1){
      this.quantity -= 1;
    }
  }

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
