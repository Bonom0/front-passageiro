import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private router: Router) {}

  onLogin(event: { userType: string }) {
    this.isLoggedIn = true;
    if (event.userType === 'Passageiro') {
      this.router.navigate(['/passageiro/passageiro/confirmacao-presenca']);
    } else if (event.userType === 'Operador') {
      this.router.navigate(['/operador/dashboard']);
    }
  }
}
