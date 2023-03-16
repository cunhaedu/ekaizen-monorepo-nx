import { Component, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@ek-frontend/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(formLogin: FormGroup) {
    this.auth.login(formLogin.value);
    this.router.navigate(['/dashboard/general'])
  }
}
