import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private apiUrl = 'http://localhost:5000'; // Remplacez par l'URL réelle de votre backend

  constructor(private http: HttpClient) {}

  getVihecules(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vihecules`);
  }

  getViheculeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vihecules/${id}`);
  }

  createVihecule(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vihecules`, data);
  }

  deleteVihecule(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vihecules/${id}`);
  }

  getViheculesByClientId(clientId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vihecules/client/${clientId}`);
  }
}
