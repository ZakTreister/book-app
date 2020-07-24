import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from 'src/app/@shared/services/book.service'
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, switchMap, map, filter, catchError, tap, distinctUntilChanged } from 'rxjs/operators';
import { Book } from 'src/app/@shared/models/book';

export interface State {
  q: string,
  startIndex: number;
  maxResults: number;
}

@Component({
  selector: 'ba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public totalItems: number;

  private searchSubject: Subject<State> = new Subject<State>();
  private _state: State = {
    q: '',
    startIndex: 0,
    maxResults: 20
  };

  public get searchTerm() {
    return this._state.q;
  }
  public get page() {
    let page = (this._state.startIndex / this._state.maxResults) + 1;
    return page;
  }

  public set searchTerm(q: string) {
    this._set({ q });
  }
  public set page(page: number) {
    let startIndex = (page - 1) * this._state.maxResults;
    this._set({ startIndex });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this.searchSubject.next(this._state);
  }

  public book$: Observable<Book[]> = this.searchSubject.pipe(
    debounceTime(300),
    filter(state => !!state.q),
    switchMap(state => this.bookService.getBooks(state).pipe(
      tap(res => this.totalItems = res && res.totalItems || 0),
      map(res => !!res && !!res.items ? res.items : []),
      catchError(err => of(null)))));


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

}
