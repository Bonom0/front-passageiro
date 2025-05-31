import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
  empresa: Empresa = {
    id: '',
    fantasia: '',
    cnpj: ''
  };
  private id!: string;

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private empresaService: EmpresaService //métodos HTTP
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarEmpresa();
  }

  carregarEmpresa(): void {
    if (!this.id) {
      this.router.navigate(['/listagem']);
      return;
    }

    this.empresaService.buscarEmpresa(this.id).subscribe((a) => {
      this.empresa = a;
    });
  }

  salvar(): void {
    if (!this.empresa) return;

    this.empresaService
      .atualizarEmpresa(this.id, this.empresa)
      .subscribe(() => {
        this.router.navigate(['/listagem']);
      });
  }
}
