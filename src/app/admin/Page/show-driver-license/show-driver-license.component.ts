import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-driver-license',
  templateUrl: './show-driver-license.component.html',
  styleUrl: './show-driver-license.component.css'
})
export class ShowDriverLicenseComponent implements OnInit{
  constructor(private readonly tite:Title){

  }
  ngOnInit(): void {
    this.tite.setTitle("Liste Of Driver License Page");
  }

  status:string='Pending';
}
