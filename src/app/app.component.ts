import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // para *ngIf
import { RouterModule } from '@angular/router';     // para <router-outlet>
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginComponent,
    SidebarComponent
  ],
  template: `
    <app-login *ngIf="!isLoggedIn" (loginSuccess)="handleLogin()"></app-login>
    <app-sidebar *ngIf="isLoggedIn"></app-sidebar>
    <router-outlet *ngIf="isLoggedIn"></router-outlet>
  `
})
export class AppComponent {
  isLoggedIn = false;

  handleLogin() {
    this.isLoggedIn = true;
  }
}
