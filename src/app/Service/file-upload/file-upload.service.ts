import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiFileUploadUrl))+"/drive"

  constructor(private readonly http:HttpClient) { }

  uploadDriverLicenseImage(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/driver-license`, requestBody);
  }

  uploadClientImage(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/image-client`, requestBody);
  }

  uploadVehiculeImage(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/image-vihecule`, requestBody);
  }

  uploadContractImage(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/contract-pdf`, requestBody);
  }

  uploadNationaleIdentityImage(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/national-identity-card`, requestBody);
  }






}
