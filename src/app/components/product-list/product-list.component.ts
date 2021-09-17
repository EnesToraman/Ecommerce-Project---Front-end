import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(productList =>{
      this.productList = productList;
    })
  }

  ngOnInit(): void {
  }

}
