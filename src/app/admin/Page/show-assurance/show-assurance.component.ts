import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-assurance',
  templateUrl: './show-assurance.component.html',
  styleUrl: './show-assurance.component.css'
})
export class ShowAssuranceComponent implements OnInit{
  constructor(private readonly tite:Title){

  }
  ngOnInit(): void {
    this.tite.setTitle("Liste Of Insurance Page");
  }

  status:string='Pending';
}
