import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiVehicule))+"/vehicule"
  constructor(private readonly http:HttpClient,private readonly token:TokenService,protected readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService) { }

    getAllVehicule(): Observable<any> {
    // Vérifier la connexion au serveur
    this.checkServerConnection.checkGatewayConnection();

    // Définir les en-têtes avec le jeton
    const headers = new HttpHeaders({
      'Authorization': this.token.getToken() ?? "",
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
     // Effectuer la requête GET avec les en-têtes
     return this.http.get<any>(this.apiUrl, { headers });
    }

    getAllVehiculeForClient(): Observable<any> {
       // Set up the headers with the token
      const headers = new HttpHeaders()
      .set('Authorization', this.token.getToken()??"")
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
      // Make the GET request with headers
      return this.http.get<any>(`${this.apiUrl}/client/${this.token.getDecodedToken()?.idSql}`, { headers });
      
    }

    getVehiculeByID(id:string):Observable<any> {

      // Set up the headers with the token
      const headers = new HttpHeaders().set('Authorization', this.token.getToken()??"");
  
      // Make the GET request with headers
      return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
    }
  
}
