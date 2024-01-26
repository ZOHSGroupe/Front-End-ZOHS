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
  data:any=null;

  constructor(
    private readonly title: Title,
    private readonly checkServerConnection: CheckServerMaintenanceProblemService,
    private readonly token: TokenService,
    private readonly vehiculeService: VehiculeService) { }
  
    ngOnInit(): void {
      this.checkServerAndAuthorization();
      this.title.setTitle("Home Page Of Client");
      this.getAllVehiculesOfClient();
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
 


  


