import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [PagesComponent, SearchComponent, WishlistComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
