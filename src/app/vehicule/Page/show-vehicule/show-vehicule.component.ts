import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { VehiculeService } from '../../Service/vehicule/vehicule.service';

@Component({
  selector: 'app-show-vehicule-1',
  templateUrl: './show-vehicule.component.html',
  styleUrl: './show-vehicule.component.css'
})
export class ShowVehiculeComponent  implements OnInit{
  data:any;
  constructor(private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private vehiculeService:VehiculeService){

  }
  ngOnInit(): void {
    this.checkServerAndAuthorization();
    this.getAllVehiculesOfClient();
    this.tite.setTitle("Liste Of Vehicule Page");
  }

  
  
    checkServerAndAuthorization(): void {
      if (environment.production) {
        this.checkServerConnection.checkGatewayConnection();
        this.token.notAuthenticatedEvent();
      }
    }

    getAllVehiculesOfClient(): void {
      this.checkServerAndAuthorization();
      this.vehiculeService.getAllVehiculeForClient().subscribe(
        (data) => {
          this.data = data;
        },
        (error) => {
          this.data = null;
        }
      );
    }
    

}

