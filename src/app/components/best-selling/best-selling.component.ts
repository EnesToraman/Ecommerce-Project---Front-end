import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {

  public bestSellingProductList: Product[] = [];
  
  constructor(private productService: ProductService) {
    this.productService.getBestSelling().subscribe(bestSellingProductList => {
      this.bestSellingProductList = bestSellingProductList;
    });
  }

  ngOnInit(): void { }

}
