import { Injectable } from '@angular/core';
import { VolumeInfo, Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: Book[] = [];
  private selectedBookKeys: any = {};

  constructor() { }

  public getWishList(): Book[] {
    return this.wishlist;
  }

  public toggleBookWish(book: Book) {
    if (!this.selectedBookKeys[book.id]) {
      this.addBook(book)
    } else {
      this.removeBook(book)
    }
  }

  public isOnWishlist(book: Book): boolean {
    return !!this.selectedBookKeys[book.id]
  }

  private addBook(book: Book) {
    this.wishlist.push(book)
    this.selectedBookKeys[book.id] = true;
  }


  private removeBook(book: Book) {
    let index = this.wishlist.findIndex(b => b.id == book.id);
    if (index > -1) {
      this.wishlist.splice(index, 1);
    }
    this.selectedBookKeys[book.id] = false;
  }

 
}
