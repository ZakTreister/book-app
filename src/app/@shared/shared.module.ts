import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SubStrPipe } from './pipes/sub-str.pipe';



@NgModule({
  declarations: [BookComponent, BookListComponent, SubStrPipe],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent,
    BookListComponent
  ]
})
export class SharedModule { }
