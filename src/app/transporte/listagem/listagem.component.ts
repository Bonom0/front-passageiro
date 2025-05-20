import { Component, OnInit } from '@angular/core';
import { PassageiroService } from '../passageiro.service';
import { Passageiro } from '../passageiro.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent implements OnInit {
  passageiros: Passageiro[] = [];

  constructor(private passageiroService: PassageiroService) {}

  ngOnInit(): void {
    this.carregarPassageiro();
  }

  carregarPassageiro(): void {
    this.passageiroService.listarPassageiro().subscribe((res) => {
      //subscribe > espera um retorno para prosseguir
      this.passageiros = res;
    });
  }
}
