import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from './Service/token/token.service';
import { LanguageService } from './Service/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private readonly token:TokenService,private readonly translate:TranslateService,private readonly language:LanguageService){

  }
  ngOnInit(): void {
    this.token.setToken("");
    this.translate.setDefaultLang(this.language.getLanguage());
    console.log(this.token.getDecodedToken());
  }

}
