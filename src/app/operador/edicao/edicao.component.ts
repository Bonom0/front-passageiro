import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperadorService } from '../operador.service';
import { Operador } from '../operador.model';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';
import { EmpresaService } from '../../empresa/empresa.service';
import { Empresa } from '../../empresa/empresa.model';


@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class OperadorEdicaoComponent implements OnInit {
  operador: Operador = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    empresaId: '',
    tipo_usuario_id: ''
  };
  private id!: string;

  tiposUsuario: TipoUsuario[] = [];
  empresas: Empresa[] = [];

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private operadorService: OperadorService, //métodos HTTP
    private tipoUsuarioService: TipoUsuarioService,
    private empresaService: EmpresaService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarOperador();
    this.carregarEmpresa();
    this.carregarTiposUsuario();
  }

  carregarOperador(): void {
    if (!this.id) {
      this.router.navigate(['/operador/listagem']);
      return;
    }

    this.operadorService.buscarOperador(this.id).subscribe((a) => {
      this.operador = a;
    });
  }

  carregarTiposUsuario(): void {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });
  }

  carregarEmpresa(): void {
    this.empresaService.listarEmpresa().subscribe((empresa) => {
      this.empresas = empresa;
    });
  }

  salvar(): void {
    if (!this.operador) return;

    this.operadorService
      .atualizarOperador(this.id, this.operador)
      .subscribe(() => {
        this.router.navigate(['/operador/listagem']);
      });
  }
}
