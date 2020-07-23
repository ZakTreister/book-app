import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public gorup: FormGroup = this.fb.group({
    'username': this.fb.control(null, Validators.required)
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public login() {
      
  }
}
