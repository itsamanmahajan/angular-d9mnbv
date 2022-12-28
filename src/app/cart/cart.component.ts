import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  n!: number;
  constructor(private cartservice: CartService) {
    //this.n = this.cartservice.getl();
  }
  getl() {

 this.n= this.cartservice.getl();
  }
  ngOnInit() {}
}
