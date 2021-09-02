import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { MainSliderComponent } from './components/home-components/main-slider/main-slider.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/home-components/brands/brands.component';
import { FeaturedProductComponent } from './components/home-components/featured-product/featured-product.component';
import { NewsletterComponent } from './components/home-components/newsletter/newsletter.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './components/product-detail/comments/comments.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    BottomBarComponent,
    MainSliderComponent,
    HomeComponent,
    BrandsComponent,
    FeaturedProductComponent,
    NewsletterComponent,
    LoginComponent,
    CommentsComponent,
    ProductListComponent,
    BestSellingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
