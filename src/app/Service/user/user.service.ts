import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  signin(emailOrUsername:string,password:string): Observable<any> {
    const requestBody = {
      emailOrUsername,
      password
    };

    return this.http.post(`${environment.apiUrl}/auth/signin`, requestBody);
  }

  signup(idSql:string,email:string,username:string,nationalId:string,password:string): Observable<any> {
    const requestBody = {
      email,
      password,
      username,
      nationalId,
      idSql
    };

    return this.http.post(`${environment.apiUrl}/auth/signup`, requestBody);
  }

  emailExist(email:string): Observable<any>{
    const requestBody = {
      email
    };
    return this.http.post(`${environment.apiUrl}/auth/exist-email`, requestBody);

  }

  NationalIdExist(nationalId:string): Observable<any>{
    const requestBody = {
      nationalId
    };
    return this.http.post(`${environment.apiUrl}/auth/exist-national-id`, requestBody);

  }
  
}
