import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environment.prod';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-client',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly title:Title){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
    }
    this.title.setTitle("Home Page Of Client");
  }
}