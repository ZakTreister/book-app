import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/@shared/services/account.service'
@Component({
  selector: 'ba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('input') public input: ElementRef<HTMLInputElement>;

  public gorup: FormGroup = this.fb.group({
    'username': this.fb.control(null, Validators.required)
  })

  constructor(private fb: FormBuilder,
    private account: AccountService) { }
  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  public login() {
    if (this.gorup.valid)
      this.account.login(this.gorup.value.username)
  }
}
