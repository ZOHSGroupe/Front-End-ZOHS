import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { environment } from '../../../environment.prod';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly title:Title){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
    }
    this.title.setTitle("Forgot Password Page");
  }
}
