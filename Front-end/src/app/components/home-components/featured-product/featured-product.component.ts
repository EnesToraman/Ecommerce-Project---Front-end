import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  public productList: Product[] = [];

  public faStar = faStar;
  public faCartPlus = faCartPlus;
  public faHeart = faHeart;
  public faSearch = faSearch;
  public faShoppingCart = faShoppingCart;

  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(productList => {
      this.productList = productList;
    });
  }

  ngOnInit(): void {
  }

}
