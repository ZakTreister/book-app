import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from 'src/app/@shared/services/book.service'
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, switchMap, map, filter, catchError } from 'rxjs/operators';
import { Book } from 'src/app/@shared/models/book';

@Component({
  selector: 'ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  private searchSubject: Subject<string> = new Subject<string>();
  public book$: Observable<Book[]> = this.searchSubject.pipe(
    debounceTime(300),
    filter(val => !!val),
    switchMap(val => this.bookService.getBooks(val).pipe(
      map(res => !!res && !!res.items ? res.items : []),
      catchError(err => of(null)))));

  private _searchTerm: string = '';
  public get searchTerm(): string {
    return this._searchTerm;
  }
  public set searchTerm(val: string) {
    this.searchSubject.next(val)
    this._searchTerm = val;
  }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

}
