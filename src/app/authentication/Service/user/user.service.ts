import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiAuthUrl))+"/auth"

  constructor(private readonly http: HttpClient) { }
  
  signin(emailOrUsername:string,password:string): Observable<any> {
    const requestBody = {
      emailOrUsername,
      password
    };

    return this.http.post(`${this.apiUrl}/signin`, requestBody);
  }

  signup(idSql:string,email:string,username:string,nationalId:string,password:string): Observable<any> {
    const requestBody = {
      email,
      password,
      username,
      nationalId,
      idSql
    };

    return this.http.post(`${this.apiUrl}/signup`, requestBody);
  }

  emailExist(email:string): Observable<any>{
    const requestBody = {
      email
    };
    return this.http.post(`${this.apiUrl}/exist-email`, requestBody);

  }

  nationalIdExist(nationalId:string): Observable<any>{
    const requestBody = {
      nationalId
    };
    return this.http.post(`${this.apiUrl}/exist-national-id`, requestBody);

  }
  
}
