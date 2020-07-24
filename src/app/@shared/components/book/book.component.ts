import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Book } from '../../models/book';
@Component({
  selector: 'ba-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  public image: string;
  public title: string;
  public authers: string[];

  public isOnWishlist: boolean;
  private _book: Book;
  @Input() public set book(b: Book) {
    this._book = b;
    if(!!b && b.volumeInfo){
      this.image = b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail || '';
      this.title = b.volumeInfo.title || '';
      this.authers = b.volumeInfo.authors || [];
    }
    this.isOnWishlist = this.wishlistService.isOnWishlist(b)
  };
  public get book(): Book {
    return this._book;
  }

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  public toggleWishlist() {
    this.isOnWishlist = !this.isOnWishlist;
    this.wishlistService.toggleBookWish(this.book)
  }
}
