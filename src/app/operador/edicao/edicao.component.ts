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
    nome: '',
    email: '',
    senha: '',
    empresaId: '',
    tipo_usuario_id: ''
  };
  private id!: string;

  empresas: Empresa[] = [];
  tiposUsuario: TipoUsuario[] = [];

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private operadorService: OperadorService, //métodos HTTP
    private tipoUsuarioService: TipoUsuarioService,
    private empresaService: EmpresaService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarEmpresa(() => {
      this.carregarTiposUsuario(() => {
        this.carregarOperador();
      });
    });
  }

  carregarOperador(): void {
    if (!this.id) {
      this.router.navigate(['/operador/operador/listagem']);
      return;
    }

    this.operadorService.buscarOperador(this.id).subscribe((a) => {
      this.operador = a;
      console.log('Operador carregado:', this.operador);

      if (this.operador.tipo && typeof this.operador.tipo === 'object') {
        this.operador.tipo_usuario_id = this.operador.tipo.id;
      }
      if (this.operador.empresa && typeof this.operador.empresa === 'object') {
        this.operador.empresaId = this.operador.empresa.id;
      }
      if (this.operador.empresaId) {
        this.operador.empresaId = this.operador.empresaId;
      }
      if (this.operador.empresaId) {
      }
    });
  }

  carregarTiposUsuario(callback?: () => void): void {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
      if (callback) callback();
    });
  }

  carregarEmpresa(callback?: () => void): void {
    this.empresaService.listarEmpresa().subscribe((empresa) => {
      this.empresas = empresa;
      console.log('Empresas:', this.empresas);
      if (callback) callback();
    });
  }

  salvar(): void {
    if (!this.operador) return;

    const { id, ...operadorParaEnvio } = this.operador;

    this.operadorService
      .atualizarOperador(this.id, operadorParaEnvio)
      .subscribe(() => {
        this.router.navigate(['/operador/operador/listagem']);
      });
  }
}
