import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class EmpresaListagemComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.carregarEmpresa();
  }

  carregarEmpresa(): void {
    this.empresaService.listarEmpresa().subscribe((res) => {
      //subscribe > espera um retorno para prosseguir
      this.empresas = res;
    });
  }
}
