import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { VolumeInfo } from '../../models/book';

@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  @Input() books: VolumeInfo[];

  constructor() { }

  ngOnInit(): void {
  }

}
