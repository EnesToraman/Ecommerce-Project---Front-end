import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'best-selling-products', component: BestSellingComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
