import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TipoUsuario } from '../tipousuario.model';
import { FormsModule } from '@angular/forms';
import { TipoUsuarioService } from '../tipousuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class TipoUsuarioCadastroComponent {
  tipousuario: TipoUsuario = {
    id: '',
    descricao: '',
  };

  constructor(
    private tipousuarioService: TipoUsuarioService,
    private router: Router
  ) {}

  salvar() {
    this.tipousuarioService
      .cadastrarTipoUsuario(this.tipousuario)
      .subscribe(() => {
        this.router.navigate(['/tipousuario/listagem']);
      });
  }
}
