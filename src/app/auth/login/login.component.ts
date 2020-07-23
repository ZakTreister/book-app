import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/@shared/services/account.service'
@Component({
  selector: 'ba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public gorup: FormGroup = this.fb.group({
    'username': this.fb.control(null, Validators.required)
  })

  constructor(private fb: FormBuilder,
    private account: AccountService) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.gorup.valid)
      this.account.login(this.gorup.value.username)
  }
}
