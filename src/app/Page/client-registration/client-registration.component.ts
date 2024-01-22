import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../Service/client/client.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrl: './client-registration.component.css'
})
export class ClientRegistrationComponent {
  loginForm: FormGroup;
  code:string="";

  constructor(private fb:FormBuilder,private userService:ClientService,private titleService:Title){
    this.loginForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      gender: ['Male', [Validators.required]], // Defaulting to 'Male'
      birthDate: ['', [Validators.required]],
      nationality: ['', [Validators.required, Validators.maxLength(50)]],
      nationalId: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      tel: ['', [Validators.required, Validators.maxLength(15)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      status: ['Penging', [Validators.required]], // Defaulting to 'Active'
      frontCardNationaleImg: ['', [Validators.required]], // Defaulting to 'Active'
      backCardNationaleImg: ['', [Validators.required]], // Defaulting to 'Active'
      //createDate: [''], // Assuming create_date is not used for login
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      digit1: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit2: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit3: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit4: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit5: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit6: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]]
    }); 
  }

  ngOnInit(): void {
    this.titleService.setTitle('User Registration');
  }
  onSubmit():void{

  }
  sendEmail():void{
    
  }
  getDigitsCode():string{
    return this.loginForm.value.digit1+this.loginForm.value.digit2+this.loginForm.value.digit3+this.loginForm.value.digit4+this.loginForm.value.digit5+this.loginForm.value.digit6;
  }
  onDigitInput(index: number): void {
    // Move focus to the next input field if available
    const nextIndex = index + 1;
    if (nextIndex <= 6) {
      const nextInput = document.getElementById(`digit${nextIndex}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
