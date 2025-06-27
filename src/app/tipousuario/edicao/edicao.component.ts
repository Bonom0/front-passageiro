import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoUsuarioService } from '../tipousuario.service';
import { TipoUsuario } from '../tipousuario.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class TipoUsuarioEdicaoComponent implements OnInit {
  tipousuario: TipoUsuario = {
    descricao: '',
  };
  private id!: string;

  constructor(
    private route: ActivatedRoute, //captura o ID
    private router: Router, //controle de rotas
    private tipousuarioService: TipoUsuarioService //métodos HTTP
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarTipoUsuario();
  }

  carregarTipoUsuario(): void {
    if (!this.id) {
      this.router.navigate(['/operador/tipousuario/listagem']);
      return;
    }

    this.tipousuarioService.buscarTipoUsuario(this.id).subscribe((a) => {
      this.tipousuario = a;
    });
  }

  salvar(): void {
    if (!this.tipousuario) return;

    // Cria um novo objeto sem o campo id
    const { id, ...tipousuarioSemId } = this.tipousuario;

    this.tipousuarioService
      .atualizarTipoUsuario(this.id, tipousuarioSemId)
      .subscribe(() => {
        this.router.navigate(['/operador/tipousuario/listagem']);
      });
  }
}
