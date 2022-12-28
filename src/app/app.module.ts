import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { ApproutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule,ApproutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BooksComponent,
    BookComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
