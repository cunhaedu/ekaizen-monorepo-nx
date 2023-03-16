import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(loginData: any): void {
    localStorage.setItem('access_token', JSON.stringify(loginData));
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
}
