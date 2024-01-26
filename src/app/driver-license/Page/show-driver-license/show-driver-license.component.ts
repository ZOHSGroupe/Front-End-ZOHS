import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { Title } from '@angular/platform-browser';
import { TokenService } from '../../../Service/token/token.service';
import { environment } from '../../../environment.prod';
import { DriverLicenseService } from '../../Service/driver-license/driver-license.service';

@Component({
  selector: 'app-show-driver-license-1',
  templateUrl: './show-driver-license.component.html',
  styleUrl: './show-driver-license.component.css'
})
export class ShowDriverLicenseComponent implements OnInit {
  data:any=null;

  constructor(private readonly driverLicenseService:DriverLicenseService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly title:Title,private readonly token:TokenService){

  }
  ngOnInit(): void {
    this.checkServerAndAuthorization();
    this.title.setTitle("Home Page Of Client");
    this.getAllDriverLicenseOfClient();
  }
  checkServerAndAuthorization():void{
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.token.notAuthenticatedEvent();
      return;
    }
  }
  getAllDriverLicenseOfClient(){
    this.checkServerAndAuthorization();
    this.driverLicenseService.getAllDriverLicenseForClient().subscribe(
      (data) => {
        this.data=data;
      },
      (error) => {
        this.data=null;
      }
    );
  }
}
