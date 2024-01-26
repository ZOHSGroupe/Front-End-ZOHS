import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { AdminService } from '../../Service/admin/admin.service';
import { environment } from '../../../environment.prod';
import { VehiculeService } from '../../Service/vehicule/vehicule.service';

@Component({
  selector: 'app-show-vehicule',
  templateUrl: './show-vehicule.component.html',
  styleUrl: './show-vehicule.component.css'
})
export class ShowVehiculeComponent implements OnInit{
  data:any;
  constructor(private readonly vehiculeService: VehiculeService ,private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService,private readonly adminService:AdminService){

  }
  ngOnInit(): void {
    this.checkServerAndAuthorization();
    this.getAllVehicule();
    this.tite.setTitle("Liste Of Driver License Page");
  }

  checkServerAndAuthorization():void{
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
      this.adminService.isAdmin();
      return;
    }
  }

  getAllVehicule():void{
    this.checkServerAndAuthorization();
    this.vehiculeService.getAllVehiculeForAdmin().subscribe(
      (data) => {
        this.data=data;
      },
      (error) => {
        this.data=null;
      }
    );
  }

  //getVehiculeToProcess(id:string):void{
    //this.checkServerAndAuthorization();
    //this.vehiculeService.getVehiculeByID(id).subscribe(
      //(data) => {
        ////Handle Process of prnding driver license
      //},
      //(error) => {
        //console.log(error?.status);
     // }
    //);

  //}
}
