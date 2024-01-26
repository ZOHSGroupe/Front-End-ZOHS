import { Injectable } from '@angular/core';
import { environment } from '../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private readonly apiUrl:string=((environment.production)?environment.apiUrl:(environment.development.apiLinkUrl))+"/link"
  constructor(private readonly http:HttpClient) { }
  addLink(type:string,idSource:string,sourceLink:string,url:string): Observable<any>{
    const requestBody = {
      type,
      idSource,
      sourceLink,
      url
    };

    return this.http.post(`${this.apiUrl}`, requestBody);
  }
  getLink(sourceLink:string,typeLink:string,idSource:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${sourceLink}/${typeLink}/${idSource}`);
  }
  getAllLinks(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
}
