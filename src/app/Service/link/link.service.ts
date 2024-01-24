import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private readonly apiUrl:string=environment.apiAuthUrl+"/"
  constructor() { }
}
