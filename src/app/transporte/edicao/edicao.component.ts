import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassageiroService } from '../passageiro.service';
import { Passageiro } from '../passageiro.model';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';
import { MotoristaService } from '../../motorista/motorista.service';
import { Motorista } from '../../motorista/motorista.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
  providers: [provideNgxMask()]
})
export class PassageiroEdicaoComponent implements OnInit {
  passageiro: Passageiro = {
    nome: '',
    cpf: '',
    senha: '',
    cep: '',
    rua: '',
    contato: '',
    horario_embarque: '',
    id_motorista: '',
    ativo: true,
    dta_insert: '',
    tipo: '',
    email: '',
  };
  private id!: string;

  tiposUsuario: TipoUsuario[] = [];
  motoristas: Motorista[] = [];

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private passageiroService: PassageiroService, //métodos HTTP
    private tipoUsuarioService: TipoUsuarioService,
    private motoristaService: MotoristaService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
      this.carregarPassageiro();
    });
    this.carregarMotoristas();
  }

  carregarPassageiro(): void {
    if (!this.id) {
      this.router.navigate(['/operador/passageiro/listagem']);
      return;
    }

    this.passageiroService.buscarPassageiro(this.id).subscribe((p) => {
      this.passageiro = p;

      // Ajuste o campo de data para o formato aceito pelo input
      if (this.passageiro.horario_embarque) {
        const date = new Date(this.passageiro.horario_embarque);
        this.passageiro.horario_embarque = date.toISOString();
      }
      if (this.passageiro.dta_insert) {
        this.passageiro.dta_insert = new Date(this.passageiro.dta_insert).toISOString().slice(0, 16);
      }

      if (this.passageiro.tipo && typeof this.passageiro.tipo === 'object') {
        this.passageiro.tipo = this.passageiro.tipo.id;
      }
    });
  }

  carregarMotoristas(): void {
    this.motoristaService.listarMotorista().subscribe((motorista) => {
      this.motoristas = motorista;
    });
  }

  salvar(): void {
    if (!this.passageiro) return;

    const { id, ...passageiroSemId } = this.passageiro;

    if (passageiroSemId.horario_embarque) {
      passageiroSemId.horario_embarque = new Date(passageiroSemId.horario_embarque).toISOString();
    }
    if (passageiroSemId.dta_insert) {
      passageiroSemId.dta_insert = new Date(passageiroSemId.dta_insert).toISOString();
    }

    // Se o campo tipo for um objeto, envie apenas o id
    if (typeof passageiroSemId.tipo === 'object' && passageiroSemId.tipo !== null) {
      passageiroSemId.tipo = passageiroSemId.tipo.id;
    }

    this.passageiroService
      .atualizarPassageiro(this.id, passageiroSemId)
      .subscribe(() => {
        this.router.navigate(['/operador/passageiro/listagem']);
      });
  }
}
