import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private readonly apiUrl:string=environment.apiUrl;
  constructor(protected readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService) { }
  getAllVehicule(){

  }
}
