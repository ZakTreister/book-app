import { Component, OnInit } from '@angular/core';
import { AccountService } from '../@shared/services/account.service';

@Component({
  selector: 'ba-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public username: string = this.account.user;
  public navigation: any[] = [
    {
      title: 'Search',
      navRoute: '/app/search'
    },
    {
      title: 'Wishlist',
      navRoute: '/app/wishlist'
    },
  ]
  public expanded: boolean;

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  public toggle(){
    this.expanded = !this.expanded;
  }
  public logout(){
    this.account.logout()
  }
}
