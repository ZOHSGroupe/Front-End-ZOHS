import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { environment } from '../../environment.prod';
import { TokenService } from '../../Service/token/token.service';
import { Title } from '@angular/platform-browser';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(protected readonly router:Router,protected readonly title:Title,protected readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService){

  }

  ngOnInit(): void {
    this.checkConnectionToServer();
    this.title.setTitle("Home Page");
  }
  checkConnectionToServer():void{
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection();
      return;
    }
  }
  espaceClient():void{
    this.checkConnectionToServer();
    if(this.token.notAuthenticatedEvent()){
      this.router.navigate(['/auth/login']); 
    }else{
      this.router.navigate(['/vehicule/home']); 
    }
  }
  

}
