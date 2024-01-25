import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';

@Component({
  selector: 'app-show-vehicule-1',
  templateUrl: './show-vehicule.component.html',
  styleUrl: './show-vehicule.component.css'
})
export class ShowVehiculeComponent  implements OnInit{
  constructor(private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.token.notAuthenticatedEvent();
    }
    this.tite.setTitle("Liste Of Vehicule Page");
  }

  status:string='Pending';
}

