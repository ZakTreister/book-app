import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Book } from '../../models/book';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookService } from '../../services/book.service';
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
  public isWished: boolean;
  private _book: Book;
  @Input() public set book(b: Book) {
    this._book = b;
    if (!!b && b.volumeInfo) {
      this.image = b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail || '';
      this.title = b.volumeInfo.title || '';
      this.authers = b.volumeInfo.authors || [];
    }
    this.isWished = this.wishlistService.isOnWishlist(b)
  };
  public get book(): Book {
    return this._book;
  }
  private modal: NgbModalRef;

  constructor(private wishlistService: WishlistService,
    private modalService: NgbModal,
    private bookService: BookService) { }

  ngOnInit(): void {
  }

  public toggleWished() {
    this.isWished = !this.isWished;
    this.wishlistService.toggleBookWish(this.book)
  }

  public openDetailsModal() {
    this.bookService.getBookById(this.book.id).subscribe(book=>{

      this.modal = this.modalService.open(BookDetailsComponent, {
        size: 'lg'
      });
      this.modal.componentInstance.book = book;
    })
  }
}
