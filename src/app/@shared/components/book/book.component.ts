import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ba-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() public image:string;
  @Input() public title:string;
  @Input() public descriptKion:string;
  @Input() public auther:string;

  constructor() { }

  ngOnInit(): void {
  }

}
