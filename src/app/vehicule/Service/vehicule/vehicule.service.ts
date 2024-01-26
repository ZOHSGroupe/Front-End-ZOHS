import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private readonly apiUrl:string=environment.apiUrl;
  constructor(private readonly http: HttpClient ,protected readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService) { }
  saveVehicule(
    marque: string,
    genre: string,
    typeVehicule: string,
    numberOfPorts: number,
    fuelType: string,
    vehiculeIdentificationNumber: string,
    cylinderCount: number,
    taxIdentificationNumber: string,
    taxHorsepower: number,
    licensePlateNumber: string,
    emptyWeight: number,
    grossVehiculeWeightRating: number,
    currentCarValue: number,
    manufacturingDate: string
  ): Observable<any> {
    const requestBody = {
      status: 'Pending',
      clientId: this.token.getDecodedToken()?.idSql,
      marque,
      genre,
      typeVehicule,
      numberOfPorts,
      fuelType,
      vehiculeIdentificationNumber,
      cylinderCount,
      taxIdentificationNumber,
      taxHorsepower,
      licensePlateNumber,
      emptyWeight,
      grossVehiculeWeightRating,
      currentCarValue,
      manufacturingDate
    };

    return this.http.post(this.apiUrl, requestBody);
  }




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
