import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private readonly apiUrl:string=environment.apiUrl;
  constructor(private readonly http: HttpClient,protected readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService) { }
  getAllVehicule(){

  }

  getAllVehiculeForAdmin():Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders()
    .set('Authorization', this.token.getToken()??"")
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    // Make the GET request with headers
    return this.http.get(`${this.apiUrl}`, { headers });
 
  }

  getVehiculeToProcess(id:string):Observable<any> {

    // Set up the headers with the token
    const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");

    // Make the GET request with headers
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
}
