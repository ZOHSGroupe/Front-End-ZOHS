import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../Service/client/client.service';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../Service/user/user.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrl: './client-registration.component.css'
})
export class ClientRegistrationComponent {
  signupForm: FormGroup;
  code:string="";
  idSql:string="";

  constructor(private fb:FormBuilder,private userService:UserService,private titleService:Title){
    this.signupForm = this.fb.group({
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
      clientImg: ['', [Validators.required]],
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
  signUp():boolean{
    let ok:boolean=false;
    if(this.signupForm.valid){
      const email = this.signupForm.value.email;
      const username = this.signupForm.value.username;
      const password = this.signupForm.value.password;
      const nationalId = this.signupForm.value.nationalId;
      const idSql = this.idSql;
      

      this.userService.signup(idSql,email,username,nationalId,password).subscribe(
        (response) => {
          ok = true;
          // Handle success response
          console.log('Signin successful:', response);
          // You may want to navigate to another page or perform additional actions here
        },
        (error) => {
          // Handle error response
          console.error('Signin failed:', error);
          return false;
          // You may want to display an error message to the user or perform other actions here
        }
      );
    }
    return ok;
  }
  



  onSubmit():void{
    
  }
  sendEmail():void{
    
  }
  getDigitsCode():string{
    return this.signupForm.value.digit1+this.signupForm.value.digit2+this.signupForm.value.digit3+this.signupForm.value.digit4+this.signupForm.value.digit5+this.signupForm.value.digit6;
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
  OnSubmitAccountForm():void{

  }
  OnSubmitPersonalForm():void{

  }
}
