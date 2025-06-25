import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  userType = '';
  errorMessage = '';

  @Output() loginSuccess = new EventEmitter<{ userType: string; email: string; token: string }>();

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email && this.password.length >= 6) {
      this.authService.login(this.email, this.password, this.userType).subscribe({
        next: (response) => {
          this.loginSuccess.emit({ userType: this.userType, email: this.email, token: response.access_token });
        },
        error: (err) => {
          if (err.status === 401) {
            this.errorMessage = 'Email ou senha incorretos.';
          } else {
            this.errorMessage = 'Erro ao tentar logar. Tente novamente.';
          }
        }
      });
    } else {
      this.errorMessage = 'Email ou senha inválidos.';
    }
  }
}
