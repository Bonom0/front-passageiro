import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
  providers: [provideNgxMask()],
})
export class EmpresaEdicaoComponent implements OnInit {
  empresa: Empresa = {
    id: '',
    fantasia: '',
    cnpj: '',
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
      this.router.navigate(['/operador/empresa/listagem']);
      return;
    }

    this.empresaService.buscarEmpresa(this.id).subscribe((a) => {
      this.empresa = a;
    });
  }

  salvar(): void {
    if (!this.empresa) return;

    // Cria um novo objeto sem o campo id
    const { id, ...empresaSemId } = this.empresa;

    this.empresaService
      .atualizarEmpresa(this.id, empresaSemId)
      .subscribe(() => {
        this.router.navigate(['/operador/empresa/listagem']);
      });
  }
}
