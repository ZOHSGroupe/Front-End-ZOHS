import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user/user.service';
import { UserLogin } from '../../Model/UserLogin.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  constructor(private userService:UserService,private titleService:Title){ }
  user: UserLogin = {
    emailOrUsername: '',
    password: '',
  };
  rememberMe:boolean=false;

  signIn() {
    console.log(this.user.emailOrUsername);
    console.log(this.user.password);
  }
  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

}

