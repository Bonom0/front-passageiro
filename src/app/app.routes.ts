import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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

  { path: 'passageiro/listagem', component: PassageiroListagemComponent, canActivate: [AuthGuard] },

  { path: 'passageiro/cadastro', component: PassageiroCadastroComponent, canActivate: [AuthGuard] },

  { path: 'passageiro/edicao/:id', component: PassageiroEdicaoComponent, canActivate: [AuthGuard] },

  { path: 'tipousuario/listagem', component: TipoUsuarioListagemComponent, canActivate: [AuthGuard] },

  { path: 'tipousuario/cadastro', component: TipoUsuarioCadastroComponent, canActivate: [AuthGuard] },

  { path: 'tipousuario/edicao/:id', component: TipoUsuarioEdicaoComponent, canActivate: [AuthGuard] },

  { path: 'empresa/listagem', component: EmpresaListagemComponent, canActivate: [AuthGuard] },

  { path: 'empresa/cadastro', component: EmpresaCadastroComponent, canActivate: [AuthGuard] },

  { path: 'empresa/edicao/:id', component: EmpresaEdicaoComponent, canActivate: [AuthGuard] },
];
