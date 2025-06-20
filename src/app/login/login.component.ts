import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  userType = 'Operador';

  @Output() loginSuccess = new EventEmitter<{ userType: string; email: string; password: string }>();

  onSubmit() {
    if (this.email && this.password.length >= 6) {
      this.loginSuccess.emit({ userType: this.userType, email: this.email, password: this.password });
    } else {
      alert('Email ou senha inválidos');
    }
  }
}
