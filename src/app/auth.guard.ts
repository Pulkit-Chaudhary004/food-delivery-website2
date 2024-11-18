import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // Replace with real authentication logic
    
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}