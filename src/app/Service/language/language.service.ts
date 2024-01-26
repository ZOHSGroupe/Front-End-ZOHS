import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private readonly translate:TranslateService) { }

  // Method to set the selected language
  setLanguage(language: string): void {
    if(typeof localStorage!=="undefined"){
      localStorage.setItem('selectedLanguage', language);
      this.translate.use(language);
    }
  }

  // Method to get the selected language
  getLanguage(): string {
    if(typeof localStorage!=="undefined"){
      return localStorage.getItem('selectedLanguage') || 'en'; // Default to English if no language is set
    }else{
      return "en";
    }
  }
}
