import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  expandedGroups = {
    cadastro: true,
    listagem: true,
  };

  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor(private router: Router, private authService: AuthService) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }

  toggleGroup(group: 'cadastro' | 'listagem') {
    this.expandedGroups[group] = !this.expandedGroups[group];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
