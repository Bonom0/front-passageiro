import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Empresa } from '../empresa.model';
import { FormsModule } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class EmpresaCadastroComponent {
  empresa: Empresa = {
    id: '',
    fantasia: '',
    cnpj: '',
  };

  constructor(private empresaService: EmpresaService, private router: Router) {}

  salvar() {
    this.empresaService.cadastrarEmpresa(this.empresa).subscribe(() => {
      this.router.navigate(['empresa/listagem']);
    });
  }
}
