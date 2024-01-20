import { Component, OnInit } from '@angular/core';
import { Router,RouterModule} from "@angular/router";
import { ClientService } from '../../Service/client.service'; 
import { Client } from '../../Model/client.module';



enum Gender {
  Male = 'M',
  Female = 'F'
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
 
  
  
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];


  firstName: string = "";
  lastName: string = "";
  nationalId: string = "";
  email: string = "";
  birthday: string = "";
  city: string = "";
  nationality: string = "";
  gender: Gender = Gender.Male;
  createDate: string = "";
  lastModificationDate: string = "";
  status: string = "";
  address: string = "";
  Password  : string = "";

  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      error => {
        console.error('Erreur lors de la récupération des clients', error);
      }
    );
  }
  getClient(id: string) {
    this.clientService.getClient(id).subscribe(
      (client: Client) => {
        console.log('Client récupéré avec succès', client);
      },
      error => {
        console.error('Erreur lors de la récupération du client', error);
      }
    );
  }

  createClient() {
    const newClient: Client = {
      ID: "",
      FirstName: this.firstName,
      LastName: this.lastName,
      NationalID: this.nationalId,
      Email: this.email,
      BirthDate: this.birthday,
      City: this.city,
      Nationality: this.nationality,
      Gender: this.gender,
      CreateDate: this.createDate || "", 
      LastModificationDate: this.lastModificationDate || "", 
      Status: this.status || "", 
      Address: this.address || "" ,
      Password: this.Password
    };

    this.clientService.createClient(newClient).subscribe(
      (createdClient: Client) => {
        console.log('Client créé avec succès', createdClient);
      
        this.getClients(); 
      },
      error => {
        console.error('Erreur lors de la création du client', error);
      }
    );
  }
  updateClient(id: string, updatedClient: Client) {
    this.clientService.updateClient(id, updatedClient).subscribe(
      (client: Client) => {
        console.log('Client mis à jour avec succès', client);
        this.getClients(); 
      },
      error => {
        console.error('Erreur lors de la mise à jour du client', error);
      }
    );
  }
  deleteClient(id: string) {
    this.clientService.deleteClient(id).subscribe(
      () => {
        console.log('Client supprimé avec succès');
        this.getClients(); 
      },
      error => {
        console.error('Erreur lors de la suppression du client', error);
      }
    );
  }

 
}
