import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

//Telas Operador
import { PassageiroListagemComponent } from './transporte/listagem/listagem.component';
import { PassageiroCadastroComponent } from './transporte/cadastro/cadastro.component';
import { PassageiroEdicaoComponent } from './transporte/edicao/edicao.component';
import { TipoUsuarioEdicaoComponent } from './tipousuario/edicao/edicao.component';
import { TipoUsuarioListagemComponent } from './tipousuario/listagem/listagem.component';
import { TipoUsuarioCadastroComponent } from './tipousuario/cadastro/cadastro.component';
import { EmpresaCadastroComponent } from './empresa/cadastro/cadastro.component';
import { EmpresaEdicaoComponent } from './empresa/edicao/edicao.component';
import { EmpresaListagemComponent } from './empresa/listagem/listagem.component';
import { MotoristaCadastroComponent } from './motorista/cadastro/cadastro.component';
import { MotoristaEdicaoComponent } from './motorista/edicao/edicao.component';
import { MotoristaListagemComponent } from './motorista/listagem/listagem.component';
import { OperadorCadastroComponent } from './operador/cadastro/cadastro.component';
import { OperadorEdicaoComponent } from './operador/edicao/edicao.component';
import { OperadorListagemComponent } from './operador/listagem/listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//------------------------------------------------------------------------------//

//Telas Motorista

//------------------------------------------------------------------------------//

//Telas Passageiro

//------------------------------------------------------------------------------//

//Login
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 

  //Rotas Operador
  {
    path: 'operador',
    canActivate: [AuthGuard],
    data: { role: 'Operador' },
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'passageiro/listagem', component: PassageiroListagemComponent, canActivate: [AuthGuard] },
      { path: 'passageiro/cadastro', component: PassageiroCadastroComponent, canActivate: [AuthGuard] },
      { path: 'passageiro/edicao/:id', component: PassageiroEdicaoComponent, canActivate: [AuthGuard] },

      { path: 'tipousuario/listagem', component: TipoUsuarioListagemComponent, canActivate: [AuthGuard] },
      { path: 'tipousuario/cadastro', component: TipoUsuarioCadastroComponent, canActivate: [AuthGuard] },
      { path: 'tipousuario/edicao/:id', component: TipoUsuarioEdicaoComponent, canActivate: [AuthGuard] },

      { path: 'empresa/listagem', component: EmpresaListagemComponent, canActivate: [AuthGuard] },
      { path: 'empresa/cadastro', component: EmpresaCadastroComponent, canActivate: [AuthGuard] },
      { path: 'empresa/edicao/:id', component: EmpresaEdicaoComponent, canActivate: [AuthGuard] },

      { path: 'operador/listagem', component: OperadorListagemComponent, canActivate: [AuthGuard] },
      { path: 'operador/cadastro', component: OperadorCadastroComponent, canActivate: [AuthGuard] },
      { path: 'operador/edicao/:id', component: OperadorEdicaoComponent, canActivate: [AuthGuard] },

      { path: 'motorista/listagem', component: MotoristaListagemComponent, canActivate: [AuthGuard] },
      { path: 'motorista/cadastro', component: MotoristaCadastroComponent, canActivate: [AuthGuard] },
      { path: 'motorista/edicao/:id', component: MotoristaEdicaoComponent, canActivate: [AuthGuard] },
    ]
  },
  
  //Rotas Motorista
  // {
  //   path: 'motorista',
  //   canActivate: [AuthGuard],
  //   data: { role: 'Motorista' },
  // },

  //Rotas Passageiro
  // {
  //   path: 'passageiro',
  //   canActivate: [AuthGuard],
  //   data: { role: 'Passageiro' }
  // }
];