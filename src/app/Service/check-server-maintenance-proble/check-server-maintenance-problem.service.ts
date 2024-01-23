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

  checkGatewayConnection(): void {
    this.http.get(`${this.apiUrl}`).subscribe(
      (response) => {
        // Connection successful, perform actions if needed
      },
      (error: any) => {
        this.router.navigate(['/under-maintenance']); // !!! IMPORTANT
        if (error.status == 500) {
          this.router.navigate(['/under-maintenance']); // !!! IMPORTANT
          console.log('Not connected with the API gateway');
        }
      }
    );
  }
}
