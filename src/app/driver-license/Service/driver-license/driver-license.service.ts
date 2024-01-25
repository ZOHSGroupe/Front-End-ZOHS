import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';
import { TokenService } from '../../../Service/token/token.service';

@Injectable({
  providedIn: 'any'
})
export class DriverLicenseService{
  private readonly apiUrl = environment.apiUrl+"/driver-license";
  constructor(private readonly http: HttpClient,private readonly token:TokenService) { }
  saveDriverLicence(type:string,licenseNumber:string,issueDate:string,expirationDate:string): Observable<any> {
    const requestBody={
      status: 'Pending',
      clientId: this.token.getDecodedToken()?.idSql,
      licenseNumber,
      issueDate,
      expirationDate,
      type
    };
    return this.http.post(this.apiUrl, requestBody);
  }

  getAllDriverLicense():Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");

    // Make the GET request with headers
    return this.http.get<any>(`${this.apiUrl}/client/${this.token.getDecodedToken()?.idSql}`, { headers });
  }

}

