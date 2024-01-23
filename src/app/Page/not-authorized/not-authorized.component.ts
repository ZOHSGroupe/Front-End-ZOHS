import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.css'
})
export class NotAuthorizedComponent implements OnInit {
  constructor(private readonly title:Title){

  }
  ngOnInit(): void {
    this.title.setTitle("Not Authorized");
  }
}
