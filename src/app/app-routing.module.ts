import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'book',
    component: BooksComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingModule {}
