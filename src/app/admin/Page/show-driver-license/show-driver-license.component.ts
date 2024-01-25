import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { AdminService } from '../../Service/admin/admin.service';

@Component({
  selector: 'app-show-driver-license',
  templateUrl: './show-driver-license.component.html',
  styleUrl: './show-driver-license.component.css'
})
export class ShowDriverLicenseComponent implements OnInit{
  constructor(private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService,private readonly adminService:AdminService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
      this.adminService.isAdmin();
    }
    this.tite.setTitle("Liste Of Driver License Page");
  }

  status:string='Pending';
}
