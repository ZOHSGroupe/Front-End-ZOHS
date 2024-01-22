import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../Model/client.module';
import { environment } from '../../environment.prod';
@Injectable({
  providedIn: 'any'
})
export class ClientService {

  createClient(FirstName:string,LastName:string,NationalID:string,Email:string,BirthDate:string,City:string,Nationality:string,Gender:string,CreateDate:string,Status:string,Address:string,Tel:string): Observable<any> {
    const requestBody={
      FirstName,
      LastName,
      NationalID,
      Email,
      BirthDate,
      City,
      Nationality,
      Gender,
      CreateDate,
      Status,
      Address,
      Tel
    };
    return this.http.post(`${environment.apiUrl}/client`, requestBody);
  }

  constructor(private http: HttpClient) {}
  /*
  getClients(): Observable<Client[]> {
    const url = `${this.apiUrl}/client`;
    return this.http.get<Client[]>(url);
  }

  getClient(id: string): Observable<Client> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.get<Client>(url);
  }

  

  updateClient(id: string, client: Client): Observable<Client> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.put<Client>(url, client);
  }

  deleteClient(id: string): Observable<any> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.delete(url);
  }
  */
}
