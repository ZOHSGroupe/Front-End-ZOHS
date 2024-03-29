import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';
import { TokenService } from '../../../Service/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DriverLicenseService{
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiDriverLicense))+"/driver-license"

  constructor(private readonly http: HttpClient,private readonly token:TokenService) { }

  
  getAllDriverLicenseForAdmin():Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders()
    .set('Authorization', this.token.getToken()??"")
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    // Make the GET request with headers
    return this.http.get(`${this.apiUrl}`, { headers });
 
  }
 
  getDriverLicenseByID(id:string):Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");

    // Make the GET request with headers
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  

}

