import { Routes } from '@angular/router';
import { ListagemComponent } from './transporte/listagem/listagem.component';
import { CadastroComponent } from './transporte/cadastro/cadastro.component';
import { EdicaoComponent } from './transporte/edicao/edicao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },

  { path: 'listagem', component: ListagemComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'edicao/:id', component: EdicaoComponent },
];
