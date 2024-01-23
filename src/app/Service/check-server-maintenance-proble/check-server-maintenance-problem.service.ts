import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckServerMaintenanceProblemService {
  private readonly apiUrl:string=environment.apiUrl;
  constructor(private readonly http:HttpClient,private readonly router:Router) { }

  checkGatewayConnection(){
    this.http.get(`${this.apiUrl}/`).subscribe(
      (response) => {
        // Handle success response
        console.log("created succussuflly");
        // You may want to navigate to another page or perform additional actions here
      },
      (error) => {
        if(error.status==500){
          this.router.navigate(['/under-maintenance']);
        }
      }
    )
  }
}
