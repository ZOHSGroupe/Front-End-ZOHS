import { Component } from '@angular/core';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../../Service/token/token.service';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environment.prod';
import { VehiculeService } from '../../Service/vehicule/vehicule.service';

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

  constructor(private readonly fileUploadService:FileUploadService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private readonly vehiculeService : VehiculeService , private readonly fb: FormBuilder,private readonly title:Title) { 
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
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.token.notAuthenticatedEvent();
    }
    this.title.setTitle("Add Vehicule");
  }

  onSubmit(): void {
    if (this.vehiculeForm.valid) {
      const vehicule = this.vehiculeForm.value;
      console.log(vehicule);

      // Call your vehicule service method here to save vehicule data
      this.vehiculeService.saveVehicule(
        vehicule.marque,
        vehicule.genre,
        vehicule.typeVehicule,
        vehicule.numberOfPorts,
        vehicule.fuelType,
        vehicule.vehiculeIdentificationNumber,
        vehicule.cylinderCount,
        vehicule.taxIdentificationNumber,
        vehicule.taxHorsepower,
        vehicule.licensePlateNumber,
        vehicule.emptyWeight,
        vehicule.grossVehiculeWeightRating,
        vehicule.currentCarValue,
        vehicule.manufacturingDate
      ).subscribe(
        (response) => {
          console.log('Vehicule saved successfully:', response);
          // Perform actions after saving vehicule data
        },
        (error) => {
          console.error('Failed to save vehicule:', error);
          // Handle error response
        }
      );

      // Example code for uploading images, replace with actual implementation
      this.fileUploadService.uploadVehiculeImg(vehicule.frontVehiculeImg).subscribe(
        (response) => {
          console.log('Images uploaded successfully:', response);
          // Perform actions after uploading images
        },
        (error) => {
          console.error('Failed to upload images:', error);
          // Handle error response
        }
      );
    } else {
      this.openAlert("Enter valid values !!!", "danger");
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
