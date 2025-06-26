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

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class PassageiroEdicaoComponent implements OnInit {
  passageiro: Passageiro = {
    id: '',
    nome: '',
    cpf: '',
    senha: '',
    cep: '',
    rua: '',
    contato: '',
    horario_embarque: new Date(),
    id_motorista: '',
    ativo: true,
    dta_insert: new Date(),
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
    this.carregarPassageiro();
    this.carregarTiposUsuario();
    this.carregarMotoristas();
  }

  carregarPassageiro(): void {
    if (!this.id) {
      this.router.navigate(['/passageiro/listagem']);
      return;
    }

    this.passageiroService.buscarPassageiro(this.id).subscribe((a) => {
      this.passageiro = a;
    });
  }

  carregarTiposUsuario(): void {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });
  }

  carregarMotoristas(): void {
    this.motoristaService.listarMotorista().subscribe((motorista) => {
      this.motoristas = motorista;
    });
  }

  salvar(): void {
    if (!this.passageiro) return;

    const passageiroCorrigido = { ...this.passageiro };

    if (passageiroCorrigido.horario_embarque) {
      // Converte a string do input datetime-local para Date (mantém horário local)
      passageiroCorrigido.horario_embarque = new Date(
        passageiroCorrigido.horario_embarque
      );
    }

    this.passageiroService
      .atualizarPassageiro(this.id, passageiroCorrigido)
      .subscribe(() => {
        this.router.navigate(['/passageiro/listagem']);
      });
  }
}
