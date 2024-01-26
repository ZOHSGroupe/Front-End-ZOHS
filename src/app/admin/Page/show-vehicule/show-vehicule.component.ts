import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { AdminService } from '../../Service/admin/admin.service';
import { environment } from '../../../environment.prod';
import { VehiculeService } from '../../../vehicule/Service/vehicule/vehicule.service';

@Component({
  selector: 'app-show-vehicule',
  templateUrl: './show-vehicule.component.html',
  styleUrl: './show-vehicule.component.css'
})
export class ShowVehiculeComponent implements OnInit{
  data:any;
  constructor(private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService,private readonly adminService:AdminService,private readonly vehiculeService:VehiculeService){

  }
  ngOnInit(): void {
   this.checkAutherization();
   this.tite.setTitle("Vehicule Page For Admin");
   this.getAllVehiculesOfAdmin();
  }
  checkAutherization(){
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
      this.adminService.isAdmin();
    }
  }
  getAllVehiculesOfAdmin(): void {
    this.checkAutherization();
    this.vehiculeService.getAllVehicule().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        this.data = null;
      }
    );
  }

}
