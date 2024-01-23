import { Component, OnInit } from '@angular/core';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService){

  }
  ngOnInit(): void {
    this.checkServerConnection.checkGatewayConnection();
  }
}
