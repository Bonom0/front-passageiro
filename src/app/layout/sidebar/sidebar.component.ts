import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  template: `
    <nav class="side">
      <ul>
        <li>
          <a routerLink="/empresa/cadastro">Empresa</a>
        </li>
      </ul>
    </nav>
  `,
})
export class SidebarComponent {}
