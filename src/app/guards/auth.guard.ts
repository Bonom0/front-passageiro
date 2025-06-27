import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number;
  userType: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return this.router.createUrlTree(['/']);
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Date.now().valueOf();

      if (decoded.exp && now < decoded.exp * 1000) {
        const requiredRole = route.data['role'];
        if (requiredRole && decoded.userType !== requiredRole) {
          return this.router.createUrlTree(['/']);
        }

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
