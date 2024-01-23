import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-under-maintenance',
  templateUrl: './under-maintenance.component.html',
  styleUrl: './under-maintenance.component.css'
})
export class UnderMaintenanceComponent implements OnInit {
  constructor(private readonly title:Title){

  }
  ngOnInit(): void {
    this.title.setTitle("Under Maintenance");
  }
}

