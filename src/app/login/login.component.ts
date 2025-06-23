import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onSubmit() {
  if (this.email && this.password.length >= 6) {
    const loginData = {
      email: this.email,
      password: this.password,
      userType: this.userType
    };

    this.http.post<any>('http://localhost:3000/auth/login', loginData).subscribe({
      next: (response) => {
        if (response?.access_token) {
          localStorage.setItem('token', response.access_token);
          this.loginSuccess.emit({ userType: this.userType, email: this.email, token: response.access_token });
        } else {
          this.errorMessage = 'Resposta inválida do servidor.';
        }
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
