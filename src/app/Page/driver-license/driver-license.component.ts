import { Component ,OnInit} from '@angular/core';
import { DriverLicenceDTO, DriverLicenceCreateDTO, DriverLicenceUpdateDTO } from '../../Model/DriverLicense .module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverLicenseService } from '../../Service/driver-license.service';

@Component({
  selector: 'app-driver-license',
  templateUrl: './driver-license.component.html',
  styleUrl: './driver-license.component.css'
})


export class DriverLicenseComponent implements OnInit {
  driverLicenses: DriverLicenceDTO[] = [];
  driverLicenceForm: FormGroup = new FormGroup({});

  constructor(private driverLicenseService : DriverLicenseService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadDriverLicenses();
    this.initForm();
  }

  loadDriverLicenses(): void {
    this.driverLicenseService .getAllDriverLicenses().subscribe(
      data => this.driverLicenses = data,
      error => console.error('Error fetching driver licenses', error)
    );
  }

  initForm(): void {
    this.driverLicenceForm = this.fb.group({
      type: ['', Validators.required],
      dateCreation: ['', Validators.required], 
      status: ['', Validators.required], 
      clientId: ['', Validators.required], 
      licenseNumber: ['', Validators.required], 
      issueDate: ['', Validators.required], 
      expirationDate: ['', Validators.required], 
      
    });
  }




  updateDriverLicense(id: string): void {
    this.driverLicenseService .getDriverLicenseById(id).subscribe(
      driverLicence => {

        this.driverLicenceForm.patchValue(driverLicence);
        if (this.driverLicenceForm.valid) {
          const updateDriverLicenseDTO: DriverLicenceUpdateDTO = this.driverLicenceForm.value;
          this.driverLicenseService .updateDriverLicense(id, updateDriverLicenseDTO).subscribe(
            updatedDriverLicence => {
              const index = this.driverLicenses.findIndex(licence => licence.id === id);
              if (index !== -1) {
                this.driverLicenses[index] = updatedDriverLicence;
              }
              this.driverLicenceForm.reset();
            },
            error => console.error('Error updating driver license', error)
          );
        }
      },
      error => console.error('Error fetching driver license details for update', error)
    );
  }
  

  deleteDriverLicense(id: string): void {
    this.driverLicenseService .deleteDriverLicenseById(id).subscribe(
      () => {
        this.driverLicenses = this.driverLicenses.filter(licence => licence.id !== id);
      },
      error => console.error('Error deleting driver license', error)
    );
  }
}
