import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DateService } from '../../../Service/date/date.service';
import { environment } from '../../../environment.prod';

@Component({
  selector: 'app-add-assurance',
  templateUrl: './add-assurance.component.html',
  styleUrl: './add-assurance.component.css'
})
export class AddAssuranceComponent implements OnInit {
  clientId:string="";
  price:string="";
  showAlert:boolean=false;
  typeAlert:string="";
  alertMessage:string="";
  isLiabilityInsurance:boolean;
  isComprehensiveInsurance:boolean;
  isCollisionInsurance:boolean;
  typeAssurance:string="";
  constructor(private readonly title:Title,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly tokenService:TokenService){

  }
  ngOnInit(): void {
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.tokenService.notAuthenticatedEvent();
    }
    this.title.setTitle("Add Driver License");
  }



  onSubmit(): void {
    /*  IMPORTANTE
    if(!this.token.getDecodedToken() || this.token.isTokenExpired()){
      this.token.notAuthenticatedEvent();
      return;
    }
    */
    console.log("Type "+this.typeAssurance);


    
  }
  openAlert(message: string,type:string): void {
    this.alertMessage = message;
    this.typeAlert=type;
    this.showAlert = true;
  }

  onCloseAlert(): void {
    this.showAlert = false;
  }

  
  

}

