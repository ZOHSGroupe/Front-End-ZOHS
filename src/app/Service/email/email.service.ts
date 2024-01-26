import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiUrl:string=((environment.production)??(environment.development.apiEmailUrl))+"/email"

  constructor(private readonly http: HttpClient) { }

  sendEmailVerificationCode(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/send-verification-code`, requestBody);
  }
  sendEmailClientPendingAdminVerfification(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/account-pending`, requestBody);
  }

  sendEmailAdminAcceptAddClient(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/account-created`, requestBody);
  }

  sendEmailAdminRejeterAddClient(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/account-not-created`, requestBody);
  }


  sendEmailVehiculePendingAdminVerfification(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/vihecule-pending`, requestBody);
  }

  sendEmailAdminAcceptAddVehicule(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/vihecule-created`, requestBody);
  }

  sendEmailAdminRejeterAddVehicule(username:string,email:string,message:string){
    const requestBody = {
      username,
      email,
      message
    };

    return this.http.post(`${this.apiUrl}/vihecule-not-created`, requestBody);
  }

  sendEmailDriverLicensePendingAdminVerfification(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/licence-driver-pending`, requestBody);
  }

  sendEmailAdminAcceptAddDriverLicense(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/licence-driver-created`, requestBody);
  }

  sendEmailAdminRejeterAddDriverLicense(username:string,email:string,message:string){
    const requestBody = {
      username,
      email,
      message
    };

    return this.http.post(`${this.apiUrl}/licence-driver-not-created`, requestBody);
  }


  sendEmailContractPendingAdminVerfification(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/assurance-pending`, requestBody);
  }

  sendEmailAdminAcceptAddContract(username:string,email:string){
    const requestBody = {
      username,
      email
    };

    return this.http.post(`${this.apiUrl}/assurance-created`, requestBody);
  }

  sendEmailAdminRejeterAddContract(username:string,email:string,message:string){
    const requestBody = {
      username,
      email,
      message
    };

    return this.http.post(`${this.apiUrl}/assurance-not-created`, requestBody);
  }
  

}
