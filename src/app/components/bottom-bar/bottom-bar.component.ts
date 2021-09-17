import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login-service/login.service';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  public faSearch = faSearch;
  public faShoppingCart = faShoppingCart;
  public faHeart = faHeart;

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
