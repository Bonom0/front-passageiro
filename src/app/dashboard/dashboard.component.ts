import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  totalMotoristas = 0;
  totalPassageiros = 0;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.http.get<any>('http://localhost:3000/dashboard/resumo').subscribe({
      next: (res) => {
        this.totalMotoristas = res.totalMotoristas;
        this.totalPassageiros = res.totalPassageiros;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar dados';
      }
    });
  }
}
