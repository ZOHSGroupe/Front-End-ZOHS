import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverLicenseService } from '../../Service/driver-license.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';

@Component({
  selector: 'app-add-driver-license',
  templateUrl: './add-driver-license.component.html',
  styleUrl: './add-driver-license.component.css'
})
export class AddDriverLicenseComponent {
  driverLicenceForm: FormGroup;
  clientId:string="";
  showAlert:boolean=false;
  typeAlert:string="";
  alertMessage:string="";

  constructor(private readonly fileUploadService:FileUploadService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private readonly driverLicenseService : DriverLicenseService , private readonly fb: FormBuilder) { 
    this.driverLicenceForm = this.fb.group({
      type: ['', Validators.required],
      licenseNumber: ['', Validators.required], 
      issueDate: ['', Validators.required], 
      expirationDate: ['', Validators.required],
      frontCardDriverLicenseImg: ['',Validators.required],
      backCardDriverLicenseImg: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    // this.checkServerConnection.checkGatewayConnection();
    this.token.notAuthenticatedEvent();
  }



  onSubmit(): void {
    /*  IMPORTANTE
    if(!this.token.getDecodedToken() || this.token.isTokenExpired()){
      this.token.notAuthenticatedEvent();
      return;
    }
    */

    if (this.driverLicenceForm.valid) {
      const driverLicense= this.driverLicenceForm.value;
      console.log(driverLicense);
  
      this.driverLicenseService.saveDriverLicence(driverLicense.type,driverLicense.licenseNumber,driverLicense.issueDate,driverLicense.expirationDate).subscribe(
        (response) => {
          // Handle success response
          console.log('Signin successful:', response);
          // You may want to navigate to another page or perform additional actions here
        },
        (error) => {
          // Handle error response
          console.error('Signin failed:', error);
          // You may want to display an error message to the user or perform other actions here
        }
      );
      this.fileUploadService.uploadDriverLicenseImg(driverLicense.frontCardDriverLicenseImg)
        .subscribe(
          (response) => {
            // Handle success response
            console.log('Signin successful:', response);
            // You may want to navigate to another page or perform additional actions here
          },
          (error) => {
            // Handle error response
            console.error('Signin failed:', error);
            // You may want to display an error message to the user or perform other actions here
          }
        );
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
