import { Component } from '@angular/core';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../../Service/token/token.service';
import { DriverLicenseService } from '../../../driver-license/Service/driver-license.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrl: './add-vehicule.component.css'
})
export class AddVehiculeComponent {
  vehiculeForm: FormGroup;
  clientId:string="";
  showAlert:boolean=false;
  typeAlert:string="";
  alertMessage:string="";

  constructor(private readonly fileUploadService:FileUploadService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private readonly driverLicenseService : DriverLicenseService , private readonly fb: FormBuilder) { 
    this.vehiculeForm = this.fb.group({
      marque: ['', Validators.required],
      genre: ['', Validators.required], 
      typeVehicule: ['', Validators.required], 
      numberOfPorts : [0, Validators.required],
      fuelType : ["", Validators.required],
      vehiculeIdentificationNumber : ["", Validators.required],
      cylinderCount : [0, Validators.required],
      taxIdentificationNumber : ["", Validators.required],
      taxHorsepower : [0, Validators.required],
      licensePlateNumber : ["", Validators.required],
      emptyWeight : [0.0, Validators.required],
      grossVehiculeWeightRating : [0.0, Validators.required],
      currentCarValue : [0.0, Validators.required],
      manufacturingDate : ["", Validators.required],
      frontVehiculeImg: ['',Validators.required],
      backVehiculeImg: ['',Validators.required],
      frontCardVehiculeImg: ['',Validators.required],
      backCardVehiculeImg: ['',Validators.required],
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

    if (this.vehiculeForm.valid) {
      const driverLicense= this.vehiculeForm.value;
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
