import { Component, OnInit } from '@angular/core';
import { OperadorService } from '../operador.service';
import { Operador } from '../operador.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class OperadorListagemComponent implements OnInit {
  operadores: Operador[] = [];

  constructor(private operadorService: OperadorService) {}

  ngOnInit(): void {
    this.carregarOperador();
  }

  carregarOperador(): void {
    this.operadorService.listarOperador().subscribe((res) => {
      //subscribe > espera um retorno para prosseguir
      this.operadores = res;
    });
  }
}
