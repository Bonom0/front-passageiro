import { Component, OnInit } from '@angular/core';
import { TipoUsuarioService } from '../tipousuario.service';
import { TipoUsuario } from '../tipousuario.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class TipoUsuarioListagemComponent implements OnInit {
  tipousuarios: TipoUsuario[] = [];

  constructor(private tipousuarioService: TipoUsuarioService) {}

  ngOnInit(): void {
    this.carregarTipoUsuario();
  }

  carregarTipoUsuario(): void {
    this.tipousuarioService.listarTipoUsuario().subscribe((res) => {
      //subscribe > espera um retorno para prosseguir
      this.tipousuarios = res;
    });
  }
}
