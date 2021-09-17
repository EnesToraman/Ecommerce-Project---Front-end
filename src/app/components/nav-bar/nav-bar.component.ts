import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { finalize } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
          this.loginService.authenticated = false;
          this.router.navigateByUrl('/login');
      })).subscribe();
  }

}
