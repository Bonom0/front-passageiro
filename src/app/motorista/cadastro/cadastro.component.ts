import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Motorista } from '../motorista.model';
import { FormsModule } from '@angular/forms';
import { MotoristaService } from '../motorista.service';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [provideNgxMask()]
})
export class MotoristaCadastroComponent {
  motorista: Motorista = {
    nome: '',
    cpf: '',
    senha: '',
    contato: '',
    tipo_usuario_id: '',
    email: '',
  };

  tiposUsuario: TipoUsuario[] = [];

  constructor(
    private motoristaService: MotoristaService,
    private tipoUsuarioService: TipoUsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });
  }

  salvar() {
    this.motoristaService
      .cadastrarMotorista(this.motorista)
      .subscribe(() => {
        this.router.navigate(['/operador/motorista/listagem']);
      });
  }
}
