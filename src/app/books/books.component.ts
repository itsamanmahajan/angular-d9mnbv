import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

export interface Book {
  name: string;
  author: string;
  link: string;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  a = 5;
  ngOnDestroy() {
    console.log('destrop');
  }
  constructor() {
    console.log('in c');
    console.log(this.isshowbooks, this.isDisabled, this.books);
  }

  ngOnInit() {
    console.log(this.isshowbooks, this.isDisabled, this.books);
  }
  isshowbooks: boolean = false;
  isDisabled: boolean = true;
  onClick() {
    this.isDisabled = !this.isDisabled;
  }
  ff(e: Book) {
    this.cart.push(e);
    console.log(this.cart);
  }
  b:Book={} as Book;
  cart: Book[] = [];
  books: Book[] = [
    {
      name: 'clean code',
      author: 'Robert c martin',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg',
    },
    {
      name: 'clean code',
      author: 'Robert c martin',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg',
    },
    {
      name: 'clean code',
      author: 'Robert c martin',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg',
    },
    {
      name: 'clean code',
      author: 'Robert c martin',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg',
    },
    {
      name: 'clean code',
      author: 'Ashneer Grover',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81PuKheA8xL._AC_UL900_SR900,600_.jpg',
    },
    {
      name: 'clean code',
      author: 'Robert c martin',
      link: 'https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71UwSHSZRnS._AC_UL900_SR900,600_.jpg',
    },
  ];
clicked()
{
  this.b.name=this.name;
  this.b.author=this.author
  this.b.link=this.link
  this.books.push(this.b);
  console.log(this.books.length);
}
  name = '';
  author= '';
  link=''
}
