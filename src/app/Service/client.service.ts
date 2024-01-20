import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Model/client.module';

@Injectable({
  providedIn: 'any'
})
export class ClientService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    const url = `${this.apiUrl}/client`;
    return this.http.get<Client[]>(url);
  }

  getClient(id: string): Observable<Client> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.get<Client>(url);
  }

  createClient(client: Client): Observable<Client> {
    const url = `${this.apiUrl}/client`;
    return this.http.post<Client>(url, client);
  }

  updateClient(id: string, client: Client): Observable<Client> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.put<Client>(url, client);
  }

  deleteClient(id: string): Observable<any> {
    const url = `${this.apiUrl}/client/${id}`;
    return this.http.delete(url);
  }
}
