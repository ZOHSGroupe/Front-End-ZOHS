import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { AdminService } from '../../Service/admin/admin.service';
import { DriverLicenseService } from '../../Service/driver-license/driver-license.service';

@Component({
  selector: 'app-show-driver-license-1',
  templateUrl: './show-driver-license.component.html',
  styleUrl: './show-driver-license.component.css'
})
export class ShowDriverLicenseComponent implements OnInit{
  data:any;
  constructor(private readonly driverLicenseService:DriverLicenseService,private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService,private readonly adminService:AdminService){

  }
  ngOnInit(): void {
    this.checkServerAndAuthorization();
    this.getAllDriverLicense();
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
  getAllDriverLicense():void{
    this.checkServerAndAuthorization();
    this.driverLicenseService.getAllDriverLicenseForAdmin().subscribe(
      (data) => {
        this.data=data;
      },
      (error) => {
        this.data=null;
      }
    );
  }
  getDriverLicenseToProcess(id:string):void{
    this.checkServerAndAuthorization();
    this.driverLicenseService.getDriverLicenseByID(id).subscribe(
      (data) => {
        //Handle Process of prnding driver license
      },
      (error) => {
        console.log(error?.status);
      }
    );
  }

}
