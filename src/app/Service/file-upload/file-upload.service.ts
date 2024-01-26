import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly apiUrl=environment.apiUrl+"/drive";
  constructor(private readonly http:HttpClient) { }

  uploadDriverLicenseImg(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/driver-license`, requestBody);
  }
  uploadVehiculeImg(path:string): Observable<any>{
    const requestBody = {
      path
    };

    return this.http.post(`${this.apiUrl}/vehicule`, requestBody);
  }






}
