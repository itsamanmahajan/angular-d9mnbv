import { Injectable } from '@angular/core';
import { Book } from './books/books.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Book[] = [];

  add(book: Book) {
    this.cart.push(book);
  }
  getl() {
    //console.log(this.cart.length);
    return this.cart.length;
  }
  get() {
    return this.cart;
  }
}
