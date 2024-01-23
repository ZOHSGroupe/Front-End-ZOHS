import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl:string=environment.apiEmailUrl;
  constructor(private readonly http: HttpClient) { }

  sendEmailVerificationCode(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/email/send-verification-code`, requestBody);
  }
  sendEmailPendingAdminVerfification(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/email/account-pending`, requestBody);
  }

}
