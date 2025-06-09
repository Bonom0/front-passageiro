import { Routes } from '@angular/router';
import { PassageiroListagemComponent } from './transporte/listagem/listagem.component';
import { PassageiroCadastroComponent } from './transporte/cadastro/cadastro.component';
import { PassageiroEdicaoComponent } from './transporte/edicao/edicao.component';
import { TipoUsuarioEdicaoComponent } from './tipousuario/edicao/edicao.component';
import { TipoUsuarioListagemComponent } from './tipousuario/listagem/listagem.component';
import { TipoUsuarioCadastroComponent } from './tipousuario/cadastro/cadastro.component';
import { EmpresaCadastroComponent } from './empresa/cadastro/cadastro.component';
import { EmpresaEdicaoComponent } from './empresa/edicao/edicao.component';
import { EmpresaListagemComponent } from './empresa/listagem/listagem.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'passageiro/listagem', component: PassageiroListagemComponent },

  { path: 'passageiro/cadastro', component: PassageiroCadastroComponent },

  { path: 'passageiro/edicao/:id', component: PassageiroEdicaoComponent },

  { path: 'tipousuario/listagem', component: TipoUsuarioListagemComponent },

  { path: 'tipousuario/cadastro', component: TipoUsuarioCadastroComponent },

  { path: 'tipousuario/edicao/:id', component: TipoUsuarioEdicaoComponent },

  { path: 'empresa/listagem', component: EmpresaListagemComponent },

  { path: 'empresa/cadastro', component: EmpresaCadastroComponent },

  { path: 'empresa/edicao/:id', component: EmpresaEdicaoComponent },
];
