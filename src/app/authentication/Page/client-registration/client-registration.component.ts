import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../Service/client/client.service';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../Service/user/user.service';
import { EmailService } from '../../../Service/email/email.service';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { DateService } from '../../../Service/date/date.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrl: './client-registration.component.css'
})
export class ClientRegistrationComponent implements OnInit{
  signupForm: FormGroup;
  codeForm:FormGroup;
  codeEmailVerification:string="";
  idSql:string="";
  currentStep:number=1;
  showAlert: boolean = false;
  alertMessage: string = '';
  typeAlert:string='';
  passwordValid:boolean=false;
  codeVerificationEmailNumber:number=0;
  @ViewChild('prevButton1', { static: true }) prevButton1!: ElementRef;
  @ViewChild('prevButton2', { static: true }) prevButton2!: ElementRef;


  constructor(private readonly fb:FormBuilder,private readonly userService:UserService,private readonly titleService:Title,private readonly clientService:ClientService,private readonly emailService:EmailService,private readonly checkServerConnection:CheckServerMaintenanceProblemService,protected readonly dateService:DateService){
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      gender: ['Male', [Validators.required]], // Defaulting to 'Male'
      birthDate: ['', [Validators.required]],
      nationality: ['', [Validators.required, Validators.maxLength(50)]],
      nationalId: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      tel: ['', [Validators.required, Validators.maxLength(9),Validators.minLength(9)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      frontCardNationaleImg: ['', Validators.required],
      backCardNationaleImg: ['', Validators.required],
      clientImg: ['',Validators.required],
      //createDate: [''], // Assuming create_date is not used for login
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }); 
    this.codeForm=this.fb.group({
      digit1: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit2: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit3: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit4: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit5: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]],
      digit6: ['', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]]
    })

  }

  // Custom Validator for image files
  
  ngOnInit(): void {
    // this.checkServerConnection.checkGatewayConnection();
    this.titleService.setTitle('User Registration');
  }
  signUp():boolean{
    let ok:boolean=false;
    if(this.signupForm.valid){

      this.userService.signup(this.idSql,this.signupForm.value.email,this.signupForm.value.username,this.signupForm.value.nationalId,this.signupForm.value.password).subscribe(
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
  



  onSubmit(event: Event):void{
    console.log("Submit button clicked");
  const values = this.signupForm.value;
  event.preventDefault();
  console.log("Form submission prevented");
    if(this.codeEmailVerification==this.getDigitsCode()){
      this.clientService.createClient(values.firstname,values.lastname,values.nationalId,values.email,values.birthDate,values.city,values.nationality,values.gender,values.address,values.tel).subscribe(
        (response) => {
          // Handle success response
          console.log("created succussuflly");
          // You may want to navigate to another page or perform additional actions here
        },
        (error) => {
          // Handle error response
          console.error('problem server');
          // You may want to display an error message to the user or perform other actions here
        }
      );
    }else {
      if (this.codeVerificationEmailNumber === 3) {
        this.openAlert(`Incorrect code. You can click to resend. Verification code attempts exhausted.`, "danger");
      } else {
        this.codeVerificationEmailNumber++;
        const remainingAttempts = 3 - this.codeVerificationEmailNumber;
        this.openAlert(`Incorrect code. You now have only ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`, "warning");
      }
    }
  }
  sendEmailVerificationCode():void{
    this.codeVerificationEmailNumber=0;
    this.emailService.sendEmailVerificationCode(this.signupForm.value.username,this.signupForm.value.email).subscribe(
      (response:any) => {
        // Handle success response
        this.codeEmailVerification=(response as {code:string,status:string,message:string})?.code;
        // You may want to navigate to another page or perform additional actions here
      },
      (error:any) => {
        // Handle error response
        console.error('email not send');
        // You may want to display an error message to the user or perform other actions here
      }
    );
  }
  getDigitsCode():string{
    const values=this.codeForm.value;
    return values.digit1+values.digit2+values.digit3+values.digit4+values.digit5+values.digit6;
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
  checkPasswordValidity(): void {
    const passwordControl = this.signupForm.get('password');
    this.passwordValid = passwordControl?.valid || false;
    if(!this.passwordValid){
      this.openAlert("The minimum length of the password should be 8 characters","warning");
    }else{
      this.openAlert("","");
      this.onCloseAlert();
    }
  }

  OnSubmitAccountForm():void{
    
    if(this.signupForm.get("password")?.errors){
      this.clickPrevButton(this.prevButton1);
      this.openAlert("The minimum length of the password should be 8 characters","warning");
    }
    else if(this.signupForm.get("email")?.valid){
      this.userService.emailExist(this.signupForm.value.email).subscribe(
      (response) => {
        // Handle success response
        this.openAlert("A user already exists with the email address: " + this.signupForm.value.email,"warning");
        this.clickPrevButton(this.prevButton1);
        // You may want to navigate to another page or perform additional actions here
      },
      (error) => {
        if(error.status==404){
          // Handle error response
          this.openAlert("","");
          this.onCloseAlert();
        }else if(error.status==500){
          this.openAlert("There is a problem with the server connection. Please retry at another time.","danger");
          this.clickPrevButton(this.prevButton1);
        }
        
      }
    );
    }
    
  }
  OnSubmitPersonalForm():void{
    if(this.signupForm.get("nationalId")?.valid){
      this.userService.nationalIdExist(this.signupForm.value.nationalId).subscribe(
        (response) => {
          this.openAlert("A user already exists with national ID : "+this.signupForm.value.nationalId,"warning");
          this.clickPrevButton(this.prevButton2);
          // You may want to navigate to another page or perform additional actions here
        },
        (error) => {
          if(error.status==404){
            console.log(this.signupForm.errors);
            this.sendEmailVerificationCode();
            this.openAlert("","");
            this.onCloseAlert();
          }else if(error.status==500){
            this.openAlert("There is a problem with the server connection. Please retry at another time.","danger");
            this.clickPrevButton(this.prevButton2);
          }          
        }
      );
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

  clickPrevButton(prevButton:ElementRef): void {
    // Check if the button is not disabled before clicking
      prevButton.nativeElement.click();
  }

}
