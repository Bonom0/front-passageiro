import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Operador } from '../operador.model';
import { FormsModule } from '@angular/forms';
import { OperadorService } from '../operador.service';
import { Router } from '@angular/router';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';
import { EmpresaService } from '../../empresa/empresa.service';
import { Empresa } from '../../empresa/empresa.model';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class OperadorCadastroComponent {
  operador: Operador = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    empresaId: '',
    tipo_usuario_id: ''
  };

  tiposUsuario: TipoUsuario[] = [];
  empresas: Empresa[] = [];

  constructor(
    private operadorService: OperadorService, 
    private tipoUsuarioService: TipoUsuarioService,
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });

    this.empresaService.listarEmpresa().subscribe((empresa) => {
      this.empresas = empresa;
    });
  }

  salvar() {
    this.operadorService.cadastrarOperador(this.operador).subscribe(() => {
      this.router.navigate(['/operador/listagem']);
    });
  }
}
