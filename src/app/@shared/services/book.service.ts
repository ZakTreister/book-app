import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookList } from '../models/book';
import { FullBook } from '../models/full-book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl: string = `${environment.serverUrl}/books/v1/volumes`

  constructor(private http: HttpClient) { }

  public getBooks(query: string): Observable<BookList> {
    return this.http.get<BookList>(`${this.baseUrl}?q=${query}&maxResults=20&startIndex=0`)
  }

  public getBookById(id: string):Observable<FullBook> {
    return this.http.get<FullBook>(`${this.baseUrl}/${id}`)
  }
}
