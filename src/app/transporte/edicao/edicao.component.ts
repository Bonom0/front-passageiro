import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassageiroService } from '../passageiro.service';
import { Passageiro } from '../passageiro.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
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
  private id!: string;

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private passageiroService: PassageiroService //métodos HTTP
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarPassageiro();
  }

  carregarPassageiro(): void {
    if (!this.id) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.passageiroService.buscarPassageiro(this.id).subscribe((a) => {
      this.passageiro = a;
    });
  }

  salvar(): void {
    if (!this.passageiro) return;

    this.passageiroService
      .atualizarPassageiro(this.id, this.passageiro)
      .subscribe(() => {
        this.router.navigate(['/listagem']);
      });
  }
}
