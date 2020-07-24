import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FullBook, VolumeInfo, SaleInfo } from '../../models/full-book';
import { CurrencyPipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ba-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[CurrencyPipe]
})
export class BookDetailsComponent implements OnInit {
  public title: string;
  public image: string;
  public items = [
    { field: 'volumeInfo', prop: 'Sub Title', parsedData: (val: VolumeInfo) => !!val ? val.subtitle : '' },
    { field: 'volumeInfo', prop: 'Descrition', parsedData: (val: VolumeInfo) => !!val ? val.description : '' },
    { field: 'volumeInfo', prop: 'Authers', parsedData: (val: VolumeInfo) => !!val && val.authors ? val.authors.join(', ') : '' },
    { field: 'volumeInfo', prop: 'Pages', parsedData: (val: VolumeInfo) => !!val ? val.pageCount : '' },
    { field: 'volumeInfo', prop: 'Published', parsedData: (val: VolumeInfo) => !!val ? val.publishedDate : '' },
    { field: 'volumeInfo', prop: 'rating', parsedData: (val: VolumeInfo) => !!val ? val.averageRating : '' },
    {
      field: 'saleInfo', prop: 'Price', parsedData: (val: SaleInfo) => {
        let price: any = val && val.retailPrice && val.retailPrice.amount || '';
        if (!!price) {
          let currency = val.retailPrice.currencyCode;
          if (currency) {
            try {
              let transformedPrice = this.currency.transform(price, currency);
              price = transformedPrice;
            } catch (e) { }
          }
        }
        return price;
      }
    },
  ]
  private _book: FullBook;

  public get book(): FullBook {
    return this._book;
  }

  public set book(fullBook: FullBook) {
    if (fullBook.volumeInfo) {
      this.title = fullBook.volumeInfo.title;
      if (fullBook.volumeInfo.imageLinks) {
        this.image = fullBook.volumeInfo.imageLinks.thumbnail;
      }
    }
    this._book = fullBook;
  };

  constructor(private currency: CurrencyPipe,
    public activeModal: NgbActiveModal) {
      
     }

  ngOnInit(): void {
  }

  close(){
    this.activeModal.close()
  }

}
