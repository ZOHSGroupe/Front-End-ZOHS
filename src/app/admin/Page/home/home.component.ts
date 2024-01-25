import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { environment } from '../../../environment.prod';
import { AdminService } from '../../Service/admin/admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private readonly tite:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService,private readonly adminService:AdminService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
      this.adminService.isAdmin();
    }
    this.tite.setTitle("Admin Page");
  }
}
