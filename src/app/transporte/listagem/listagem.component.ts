import { Component, OnInit } from '@angular/core';
import { PassageiroService } from '../passageiro.service';
import { Passageiro } from '../passageiro.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent implements OnInit {
  passageiros: Passageiro[] = [];

  filtroNome = '';
  filtroEmail = '';

  sort: 'nome' | 'email' = 'nome';
  direction: 'asc' | 'desc' = 'asc';

  constructor(private passageiroService: PassageiroService) {}

  ngOnInit(): void {
    this.carregarPassageiro();
  }

  carregarPassageiro(): void {
    this.passageiroService
      .listarPassageiro(
        this.filtroNome,
        this.filtroEmail,
        this.sort,
        this.direction
      )
      .subscribe((res) => {
        //subscribe > espera um retorno para prosseguir
        this.passageiros = res;
      });
  }

  aplicarFiltros() {
    this.carregarPassageiro();
  }

  ordernarPor(campo: 'nome' | 'email') {
    //lógica para trocar a direção da ordenação
    //
    //
    this.carregarPassageiro();
  }
}
