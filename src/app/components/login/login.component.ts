import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public isEmailAllowed: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  findEmail(event: any): void {
    this.email = event.target.value;
  }

  findPassword(event: any): void {
    this.password = event.target.value;
  }

   checkEmailAllowed(event: any) {
     this.isEmailAllowed = event.target.checked;
   }


  postUser(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.isEmailAllowed);
    this.userService.postUser(this.email, this.password, this.isEmailAllowed).subscribe();
  }

}
