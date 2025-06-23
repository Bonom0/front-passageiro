import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return this.router.createUrlTree(['/']);
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Date.now().valueOf();

      if (decoded.exp && now < decoded.exp * 1000) {
        return true;
      } else {
        localStorage.removeItem('access_token');
        return this.router.createUrlTree(['/']);
      }
    } catch (e) {
      localStorage.removeItem('access_token');
      return this.router.createUrlTree(['/']);
    }
  }
}