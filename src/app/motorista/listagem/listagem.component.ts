import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../motorista.service';
import { Motorista } from '../motorista.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class MotoristaListagemComponent implements OnInit {
  motoristas: Motorista[] = [];

  constructor(private motoristaService: MotoristaService) {}

  ngOnInit(): void {
    this.carregarMotorista();
  }

  carregarMotorista(): void {
    this.motoristaService.listarMotorista().subscribe((res) => {
      //subscribe > espera um retorno para prosseguir
      this.motoristas = res;
    });
  }
}
