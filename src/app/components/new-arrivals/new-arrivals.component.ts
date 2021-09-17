import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  public newArrivalProductList: Product[] = []; 

  constructor(private productService: ProductService) { 
    this.productService.getNewArrival().subscribe(newArrivalProductList => {
      this.newArrivalProductList = newArrivalProductList;
    });
  }

  ngOnInit(): void {
  }

}
