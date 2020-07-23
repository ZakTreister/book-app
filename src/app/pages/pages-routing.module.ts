import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: 'search' },
  { path: '',  redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
