import { Component, OnInit } from '@angular/core';
import { Book } from '../books/books.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  n!: number;
  b:Book[]=[];
  constructor(private cartservice: CartService) {
    //this.n = this.cartservice.getl();
  }
  getl() {

 this.n= this.cartservice.getl();
 this.b=this.cartservice.get();
  }
  ngOnInit() {}
}
