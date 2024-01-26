import { Component } from '@angular/core';
import { FileUploadService } from '../../../Service/file-upload/file-upload.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../../Service/token/token.service';
import { Title } from '@angular/platform-browser';
import { DateService } from '../../../Service/date/date.service';
import { environment } from '../../../environment.prod';
import { VehiculeService } from '../../Service/vehicule/vehicule.service';
import { LinkService } from '../../../Service/link/link.service';

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

  constructor(private readonly fileUploadService:FileUploadService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly token:TokenService,private readonly vehiculeService : VehiculeService , private readonly fb: FormBuilder,private readonly title:Title,protected readonly dateService:DateService,private readonly linkService:LinkService) { 
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
    this.checkConnectionAndAuthorization();
    this.title.setTitle("Add Vehicule");
  }

  checkConnectionAndAuthorization():void{
    if(environment.production){
      this.checkServerConnection.checkGatewayConnection(); // IMPORTANTE
      this.token.notAuthenticatedEvent();
      return;
    }
  }

  onSubmit(): void {
    this.checkConnectionAndAuthorization();
    if (this.vehiculeForm.valid) {
      const vehicule= this.vehiculeForm.value;
      this.vehiculeService.saveVehicule(vehicule.numberOfPorts,vehicule.manufacturingDate,vehicule.grossVehiculeWeightRating,vehicule.currentCarValue,vehicule.taxHorsepower,vehicule.licensePlateNumber,vehicule.emptyWeight,vehicule.marque,vehicule.genre,vehicule.typeVehicule,vehicule.fuelType,vehicule.vehiculeIdentificationNumber,vehicule.cylinderCount,vehicule.taxIdentificationNumber).subscribe(
        (response) => {
          const idVehicule:string=response?.id;
          this.fileUploadService.uploadVehiculeImage(vehicule.frontVehiculeImg).subscribe(
            (response) => {
              this.linkService.addLink("IMAGE_VEHICULE_FRONT",idVehicule,"VEHICULE",response?.file_url);
            },
            (error) => {
              this.checkConnectionAndAuthorization();
            }
          );
          this.fileUploadService.uploadVehiculeImage(vehicule.backVehiculeImg).subscribe(
            (response) => {
              this.linkService.addLink("IMAGE_VEHICULE_BACK",idVehicule,"VEHICULE",response?.file_url);
            },
            (error) => {
              this.checkConnectionAndAuthorization();
            }
          );
          this.fileUploadService.uploadVehiculeImage(vehicule.backCardVehiculeImg).subscribe(
            (response) => {
              this.linkService.addLink("IMAGE_CARD_VEHICULE_BACK",idVehicule,"VEHICULE",response?.file_url);
            },
            (error) => {
              this.checkConnectionAndAuthorization();
            }
          );
          this.fileUploadService.uploadVehiculeImage(vehicule.frontCardVehiculeImg).subscribe(
            (response) => {
              this.linkService.addLink("IMAGE_CARD_VEHICULE_FRONT",idVehicule,"VEHICULE",response?.file_url);
            },
            (error) => {
              this.checkConnectionAndAuthorization();
            }
          );
        },
        (error) => {
          this.checkConnectionAndAuthorization();
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
