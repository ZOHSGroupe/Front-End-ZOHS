import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY = 'auth_token';
  private jwtHelper: JwtHelperService = new JwtHelperService(); // Create an instance of JwtHelperService

  constructor(@Inject(PLATFORM_ID) private platformId: any,private readonly router:Router) {}

  // Set token in session storage
  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  // Get token from session storage
  getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? sessionStorage.getItem(this.TOKEN_KEY) : null;
  }

  // Remove token from session storage
  removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }



  // Check if the token is expired
  isTokenExpired(): boolean {
    const token = this.getToken();
    return token ? this.jwtHelper.isTokenExpired(token) : true;
  }

  // Get decoded token payload
  getDecodedToken(): any {
    try{
      const token = this.getToken();
      return token ? this.jwtHelper.decodeToken(token) : null;
    }catch{
      this.setToken("");
      return null;
    }
  }

  isAuthenticated():boolean{
    if (isPlatformBrowser(this.platformId)) {
      return this.getDecodedToken()!=null?true:false;
    }
    return false;
  }

  notAuthenticatedEvent():boolean{
    if (isPlatformBrowser(this.platformId)) {
      if(!this.isAuthenticated() || this.isTokenExpired()){
        this.router.navigate(['/not-authorized']); // !!! IMPORTANT
        return true;
      }
    }
    return false;
  }
}
