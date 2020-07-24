import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookList } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<BookList> {
    return this.http.get<BookList>(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&startIndex=0`)
  }
}
