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

  @Output() loginSuccess = new EventEmitter<void>();

  onSubmit() {
    if (this.email && this.password.length >= 6) {
      this.loginSuccess.emit();
    } else {
      alert('Email ou senha inválidos');
    }
  }
}
