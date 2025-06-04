import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: `
  //   <div class="wrapper">
  //     <app-sidebar />
  //     <main class="content">
  //       <router-outlet />
  //     </main>
  //   </div>
  // `,
  // styles: [
  //   `
  //     .wrapper {
  //       display: flex;
  //     }

  //     .content {
  //       flex: 1;
  //       padding: 16px;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'projeto_transporte';
}
