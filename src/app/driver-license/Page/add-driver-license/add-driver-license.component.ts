import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverLicenseService } from '../../Service/driver-license.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';

@Component({
  selector: 'app-add-driver-license',
  templateUrl: './add-driver-license.component.html',
  styleUrl: './add-driver-license.component.css'
})
export class AddDriverLicenseComponent {
  driverLicenceForm: FormGroup;
  clientId:string="";
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private readonly driverLicenseService : DriverLicenseService , private readonly fb: FormBuilder) { 
    this.driverLicenceForm = this.fb.group({
      type: ['', Validators.required],
      licenseNumber: ['', Validators.required], 
      issueDate: ['', Validators.required], 
      expirationDate: ['', Validators.required],
      driverLicenseImg: ['',Validators.required],
      frontCardDriverLicenseImg: ['',Validators.required],
      backCardDriverLicenseImg: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    // this.checkServerConnection.checkGatewayConnection();
    this.token.notAuthenticatedEvent();
  }



  onSubmit(): void {
    if(!this.token.getDecodedToken() || this.token.isTokenExpired()){
      this.token.notAuthenticatedEvent();
      return;
    }
    if (this.driverLicenceForm.valid) {
      const driverLicense= this.driverLicenceForm.value;
  
  
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
    }
  }


  updateDriverLicense(id: string): void {
    
  }
  

  deleteDriverLicense(id: string): void {
    
  }
}
