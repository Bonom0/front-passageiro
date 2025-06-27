import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MotoristaService } from '../motorista.service';
import { Motorista } from '../motorista.model';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
  providers: [provideNgxMask()]
})
export class MotoristaEdicaoComponent implements OnInit {
  motorista: Motorista = {
    nome: '',
    cpf: '',
    senha: '',
    contato: '',
    tipo_usuario_id: '',
    email: '',
  };
  private id!: string;

  tiposUsuario: TipoUsuario[] = [];

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private motoristaService: MotoristaService, //métodos HTTP
    private tipoUsuarioService: TipoUsuarioService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarMotorista();
    this.carregarTiposUsuario();
  }

  carregarMotorista(): void {
    if (!this.id) {
      this.router.navigate(['/operador/motorista/listagem']);
      return;
    }

    this.motoristaService.buscarMotorista(this.id).subscribe((a) => {
      this.motorista = a;
    });
  }

  carregarTiposUsuario(): void {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });
  }

  salvar(): void {
    if (!this.motorista) return;

    const { id, tipo, ...motoristaSemCamposExtras } = this.motorista;

    this.motoristaService
      .atualizarMotorista(this.id, motoristaSemCamposExtras)
      .subscribe(() => {
        this.router.navigate(['/operador/motorista/listagem']);
      });
  }
}
