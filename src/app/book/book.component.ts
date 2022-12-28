import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../books/books.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor() {}
  bb: Book = {} as Book;
  ngOnInit() {}
  a = false;
  @Input('b') b: Book = {} as Book;
  @Output() emitbook = new EventEmitter<Book>();
  addtocart(e: any) {
    console.log('e' + e.id);

    const aa = document.getElementById('del');
    // setTimeout(() => {
    //   console.log('in timeout');
    //   this.bb = this.b;
    //   console.log('in timeout');
    // }, 80000);
    console.log('outside timeout');
    this.b.cart = true;
    this.emitbook.emit(this.b);
    console.log(this.b);
  }
}
