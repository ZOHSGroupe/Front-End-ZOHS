import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { Title } from '@angular/platform-browser';
import { TokenService } from '../../../Service/token/token.service';
import { environment } from '../../../environment.prod';

@Component({
  selector: 'app-show-driver-license-1',
  templateUrl: './show-driver-license.component.html',
  styleUrl: './show-driver-license.component.css'
})
export class ShowDriverLicenseComponent implements OnInit {
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly title:Title,private readonly token:TokenService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.token.notAuthenticatedEvent();
    }
    this.title.setTitle("Home Page Of Client");
  }
  status:string="Rejected";
}
