import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month: string | number = currentDate.getMonth() + 1;
    let day: string | number = currentDate.getDate();

    // Add leading zero if month or day is less than 10
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
  getDateNYearsAgo(n:number) {
    const currentDate = new Date();
    const datenYearsAgo = new Date(currentDate);
    datenYearsAgo.setFullYear(currentDate.getFullYear() - n);
    const year = datenYearsAgo.getFullYear();
    let month: string | number = datenYearsAgo.getMonth() + 1;
    let day: string | number = datenYearsAgo.getDate();

    // Add leading zero if month or day is less than 10
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
}
