import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Passageiro } from '../passageiro.model';
import { FormsModule } from '@angular/forms';
import { PassageiroService } from '../passageiro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class PassageiroCadastroComponent {
  passageiro: Passageiro = {
    id: '',
    nome: '',
    cpf: '',
    senha: '',
    cep: '',
    rua: '',
    contato: '',
    horario_embarque: new Date(),
    id_motorista: '',
    ativo: true,
    dta_insert: new Date(),
    tipo: '',
    email: '',
  };

  constructor(
    private passageiroService: PassageiroService,
    private router: Router
  ) {}

  salvar() {
    const passageiroCorrigido = { ...this.passageiro };

    if (passageiroCorrigido.horario_embarque) {
      // Converte a string do input datetime-local para Date (mantém horário local)
      passageiroCorrigido.horario_embarque = new Date(
        passageiroCorrigido.horario_embarque
      );
    }

    this.passageiroService
      .cadastrarPassageiro(passageiroCorrigido)
      .subscribe(() => {
        this.router.navigate(['/passageiro/listagem']);
      });
  }
}
