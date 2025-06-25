import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',  // Usa o HTML externo, como deve ser
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  sidebarCollapsed = false;
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  onLogin() {
    this.router.navigate(['/dashboard']);
  }

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }
}