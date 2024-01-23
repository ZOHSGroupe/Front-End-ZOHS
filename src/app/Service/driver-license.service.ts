import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverLicenceDTO, DriverLicenceCreateDTO, DriverLicenceUpdateDTO } from '../Model/DriverLicense .module';

@Injectable({
  providedIn: 'any'
})
export class DriverLicenseService{
  private apiUrl = 'http://localhost:8082/driver-license';

  constructor(private http: HttpClient) { }

  saveDriverLicence(driverLicenceCreateDTO: DriverLicenceCreateDTO): Observable<DriverLicenceCreateDTO> {
    return this.http.post<DriverLicenceCreateDTO>(this.apiUrl, driverLicenceCreateDTO);
  }

  getAllDriverLicenses(): Observable<DriverLicenceDTO[]> {
    return this.http.get<DriverLicenceDTO[]>(this.apiUrl);
  }

  getDriverLicenseById(id: string): Observable<DriverLicenceDTO> {
    return this.http.get<DriverLicenceDTO>(`${this.apiUrl}/${id}`);
  }

  getDriverLicensesByClientId(clientId: string): Observable<DriverLicenceDTO[]> {
    return this.http.get<DriverLicenceDTO[]>(`${this.apiUrl}/client/${clientId}`);
  }

  getValidDriverLicensesByClientId(clientId: string): Observable<DriverLicenceDTO[]> {
    return this.http.get<DriverLicenceDTO[]>(`${this.apiUrl}/valid/client/${clientId}`);
  }

  getInvalidDriverLicensesByClientId(clientId: string): Observable<DriverLicenceDTO[]> {
    return this.http.get<DriverLicenceDTO[]>(`${this.apiUrl}/invalid/client/${clientId}`);
  }

  updateDriverLicense(id: string, updateDriverLicenseDTO: DriverLicenceUpdateDTO): Observable<DriverLicenceDTO> {
    return this.http.put<DriverLicenceDTO>(`${this.apiUrl}/${id}`, updateDriverLicenseDTO);
  }

  deleteDriverLicenseById(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteDriverLicensesByClientId(clientId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/client/${clientId}`);
  }
}

