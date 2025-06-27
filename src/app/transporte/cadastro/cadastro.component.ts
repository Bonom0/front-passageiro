import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../passageiro.model';
import { FormsModule } from '@angular/forms';
import { PassageiroService } from '../passageiro.service';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { TipoUsuarioService } from '../../tipousuario/tipousuario.service';
import { TipoUsuario } from '../../tipousuario/tipousuario.model';
import { MotoristaService } from '../../motorista/motorista.service';
import { Motorista } from '../../motorista/motorista.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class PassageiroCadastroComponent implements OnInit {
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
    dta_insert: new Date().toISOString().slice(0, 16),
    tipo: '',
    email: '',
  };

  tiposUsuario: TipoUsuario[] = [];
  motoristas: Motorista[] = [];

  constructor(
    private passageiroService: PassageiroService,
    private tipoUsuarioService: TipoUsuarioService,
    private motoristaService: MotoristaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoUsuarioService.listarTipoUsuario().subscribe((tipos) => {
      this.tiposUsuario = tipos;
    });

    this.motoristaService.listarMotorista().subscribe((motorista) => {
      this.motoristas = motorista;
    });
  }

  salvar() {
    console.log('Chamou salvar!');
    const passageiroCorrigido = { ...this.passageiro };

    this.passageiroService
      .cadastrarPassageiro(passageiroCorrigido)
      .subscribe(() => {
        this.router.navigate(['/operador/passageiro/listagem']);
      });
  }
}
