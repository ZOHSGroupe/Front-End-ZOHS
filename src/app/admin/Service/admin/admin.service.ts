import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiAuthUrl))+"/auth"

  constructor() { }
  isAdmin():boolean{
    return false;
  }
}
