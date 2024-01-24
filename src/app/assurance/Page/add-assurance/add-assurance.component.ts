import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DateService } from '../../../Service/date/date.service';

@Component({
  selector: 'app-add-assurance',
  templateUrl: './add-assurance.component.html',
  styleUrl: './add-assurance.component.css'
})
export class AddAssuranceComponent implements OnInit {
  assuranceForm: FormGroup;
  clientId:string="";
  price:string="";
  showAlert:boolean=false;
  typeAlert:string="";
  alertMessage:string="";

  constructor(private readonly fileUploadService:FileUploadService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService, private readonly fb: FormBuilder,protected readonly title:Title,protected readonly dateService:DateService)  { 
    this.assuranceForm = this.fb.group({
      type: ['', Validators.required],
      viheculeId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.checkServerConnection.checkGatewayConnection();
    this.token.notAuthenticatedEvent();
    this.title.setTitle("Add Driver License");
  }



  onSubmit(): void {
    /*  IMPORTANTE
    if(!this.token.getDecodedToken() || this.token.isTokenExpired()){
      this.token.notAuthenticatedEvent();
      return;
    }
    */

    if (this.assuranceForm.valid) {
      const driverLicense= this.assuranceForm.value;
      console.log(driverLicense);
  
      
    }else{
      this.openAlert("Enter a valid values !!!","danger");
    }
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

