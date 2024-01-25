import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { environment } from '../../environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(protected readonly checkServerConnection:CheckServerMaintenanceProblemService){

  }

  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection();
    }
    
  }
  

}
