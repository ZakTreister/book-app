import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public get isLoggedIn(): boolean {
    return !!this.user;
  }

  public get user(): string {
    return localStorage.getItem('user')
  }
  public set user(username: string) {
    localStorage.setItem('user', username);
  }

  constructor(private router: Router) { }

  public login(username: string) {
    this.user = username;
    this.router.navigateByUrl('/app')
  }

  public logout() {
    this.user = '';
    this.router.navigate(['/'])
  }
}
