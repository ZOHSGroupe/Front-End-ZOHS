import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { environment } from '../../../environment.prod';

@Component({
  selector: 'app-show-assurance',
  templateUrl: './show-assurance.component.html',
  styleUrl: './show-assurance.component.css'
})
export class ShowAssuranceComponent {
  constructor(private readonly title:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
    }
    this.title.setTitle("Liste Of Insurance Page")
  }
}
