import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  public faHome = faHome;
  public faShoppingBag = faShoppingBag;
  public faPlusSquare = faPlusSquare;
  public faFemale = faFemale;
  public faChild = faChild;
  public faTshirt = faTshirt;
  public faMobileAlt = faMobileAlt;
  public faMicrochip = faMicrochip;

  public images = [1, 2, 3].map((n) => `http://127.0.0.1:4200/assets/images/slider-${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
