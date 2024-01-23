import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user/user.service';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckServerMaintenanceProblemService } from '../../../Service/check-server-maintenance-proble/check-server-maintenance-problem.service';
import { TokenService } from '../../../Service/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // Inside your LoginComponent class
  showPassword: boolean = false;
  constructor(private readonly checkServerConnection:CheckServerMaintenanceProblemService,private readonly fb:FormBuilder,private readonly userService:UserService,private readonly titleService:Title,private readonly tokenService:TokenService){
    this.loginForm = this.fb.group({
      emailOrUsername: ['',  [Validators.required, Validators.minLength(6)]],
      password: ['',  [Validators.required, Validators.minLength(6)]]
    });
  }
  
  emailOrUsernameAndPasswordValid:boolean=true;

  signIn() {
    if(this.loginForm.valid){
      const emailOrUsername = this.loginForm.value.emailOrUsername;
      const password = this.loginForm.value.password;

      this.userService.signin(emailOrUsername, password).subscribe(
        (response) => {
          // Handle success response
          console.log('Signin successful:', response);
          // You may want to navigate to another page or perform additional actions here
        },
        (error) => {
          // Handle error response
          this.emailOrUsernameAndPasswordValid=false;
          console.error('Signin failed:', error);
          // You may want to display an error message to the user or perform other actions here
        }
      );
    }
  }
  ngOnInit(): void {
    this.checkServerConnection.checkGatewayConnection();
    this.titleService.setTitle('Login');
  }
  // Inside your LoginComponent class
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}


