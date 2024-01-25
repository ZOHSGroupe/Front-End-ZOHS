import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from './Service/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private readonly token:TokenService){

  }
  ngOnInit(): void {
    this.token.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFNxbCI6IjQ4MDhiN2I1LThjY2ItNDE4YS04YjJjLWJiZWU1NjQ3MmNiOSIsImlhdCI6MTcwNjE0ODc0MywiZXhwIjoxNzA2MjM1MTQzfQ.bh0RDgpoth2hmvZp3_HNPP0N6Q7JoWZUKdXA0t943XY");
  }

}
