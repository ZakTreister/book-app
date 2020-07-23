import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AccountService } from 'src/app/@shared/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private account: AccountService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (next.data.requireLogin && !this.account.isLoggedIn) {
      return this.router.createUrlTree(['/'])
    }
    if (!next.data.requireLogin && !!this.account.isLoggedIn) {
      return this.router.createUrlTree(['/app'])
    }
    return true;
  }

}
