
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UserService } from 'src/app/services/user-service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public registerEmail: string = "";
  public registerPassword: string = "";
  public isEmailAllowed: boolean = false;

  public loginEmail: string = "";
  public loginPassword: string = "";

  constructor(private userService: UserService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  getRegisterEmail(event: any): void {
    this.registerEmail = event.target.value;
  }

  getRegisterPassword(event: any): void {
    this.registerPassword = event.target.value;
  }

  checkEmailAllowed(event: any): void {
     this.isEmailAllowed = event.target.checked;
   }

  getLoginEmail(event: any): void {
    this.loginEmail = event.target.value;
  }

  getLoginPassword(event: any): void {
    this.loginPassword = event.target.value;
  }

  register(){
    this.userService.postUser(this.registerEmail, this.registerPassword, this.isEmailAllowed).subscribe();
  }

  login() {
    this.loginService.authenticate(this.loginEmail, this.loginPassword, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
