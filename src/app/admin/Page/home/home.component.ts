import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private readonly tite:Title){

  }
  ngOnInit(): void {
    this.tite.setTitle("Admin Page");
  }
}
