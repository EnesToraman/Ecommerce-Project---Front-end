import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './components/product-detail/comments/comments.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'best-selling-products', component: BestSellingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
