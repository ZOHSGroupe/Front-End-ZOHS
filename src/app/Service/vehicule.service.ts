import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private apiUrl = 'http://localhost:5000'; // Remplacez par l'URL réelle de votre backend

  constructor(private http: HttpClient) {}

} 