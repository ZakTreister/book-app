import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../@shared/shared.module';;
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, SearchComponent, WishlistComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
