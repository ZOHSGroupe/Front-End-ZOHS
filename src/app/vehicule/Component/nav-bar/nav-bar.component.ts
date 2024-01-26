import { Component } from '@angular/core';
import { LanguageService } from '../../../Service/language/language.service';

@Component({
  selector: 'app-nav-bar-vehicule',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private readonly languageService:LanguageService){

  }
  setLanguage(language:string):void{
    this.languageService.setLanguage(language);
  }
}
