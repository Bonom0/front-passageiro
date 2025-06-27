import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassageiroPresencaService } from '../passageiroPresenca.service';
import { PassageiroPresenca } from '../passageiroPresenca.model';

@Component({
  selector: 'app-passageiro-presenca-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CadastroComponent {
  presenca: boolean = false;
  mensagem: string = '';

  constructor(private presencaService: PassageiroPresencaService) {}

  confirmar() {
    const confirmacao: PassageiroPresenca = {
      data: new Date().toISOString(),
      presenca: this.presenca,
      passageiroId: this.obterIdPassageiroLogado() // Implemente conforme seu auth
    };

    this.presencaService.confirmarPresenca(confirmacao).subscribe({
      next: () => this.mensagem = 'Presença confirmada com sucesso!',
      error: () => this.mensagem = 'Erro ao confirmar presença.'
    });
  }

  obterIdPassageiroLogado(): string {
    // Implemente conforme seu sistema de autenticação
    return localStorage.getItem('idPassageiro') || '';
  }
}
