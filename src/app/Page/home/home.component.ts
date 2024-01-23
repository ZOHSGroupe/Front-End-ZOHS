import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(protected readonly checkServerConnection:CheckServerMaintenanceProblemService){

  }

  ngOnInit(): void {
    this.checkServerConnection.checkGatewayConnection();
  }
  

}
