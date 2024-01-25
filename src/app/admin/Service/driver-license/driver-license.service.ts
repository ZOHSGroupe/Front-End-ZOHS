import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../../Service/token/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverLicenseService{
  private readonly apiUrl = environment.apiUrl+"/driver-license";
  constructor(private readonly http: HttpClient,private readonly token:TokenService) { }

  getAllDriverLicense():Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");

    // Make the GET request with headers
    return this.http.get<any>(`${this.apiUrl}/all}`, { headers });
  }


  getDriverLicenseByID(id:string):Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");

    // Make the GET request with headers
    return this.http.get<any>(`${this.apiUrl}/${id}}`, { headers });
  }

}

