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

  @Input('b') b: Book = {} as Book;
  @Output() emitbook = new EventEmitter<Book>();
  addtocart(e: any) {
    setTimeout(() => {
      console.log('in timeout');
      this.bb = this.b;
      console.log('in timeout');
    }, 80000);
    console.log('outside timeout');
    this.emitbook.emit(this.bb);
    console.log(e);
  }
}
