import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';
@Injectable({
  providedIn: 'any'
})
export class ClientService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiClientUrl))+"/client"

  constructor(private http: HttpClient) {}

  createClient(FirstName:string,LastName:string,NationalID:string,Email:string,BirthDate:string,City:string,Nationality:string,Gender:string,Address:string,Tel:string): Observable<any> {
    const requestBody={
      FirstName,
      LastName,
      NationalID,
      Email,
      BirthDate,
      City,
      Nationality,
      Gender,
      Status:'Pending',
      Address,
      Tel
    };
    return this.http.post(`${this.apiUrl}`, requestBody);
  }
}
