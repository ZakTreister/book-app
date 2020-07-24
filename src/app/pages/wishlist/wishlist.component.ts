import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from 'src/app/@shared/models/book';
import { WishlistService } from 'src/app/@shared/services/wishlist.service';

@Component({
  selector: 'ba-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {

  public wishlist: Book[] = this.wishlistService.getWishList()

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

}
