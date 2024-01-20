import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }
  
  signin(emailOrUsername:string,password:string): Observable<any> {
    const requestBody = {
      emailOrUsername,
      password
    };

    return this.http.post(`${environment.apiUrl}/auth/signin`, requestBody);
  }
  setAuthorizationHeader(token: string): void {
    this.headers = this.headers.set('Authorization', `${token}`);
  }
}
