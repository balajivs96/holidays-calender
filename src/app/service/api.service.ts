import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  private url: string = "https://openholidaysapi.org/PublicHolidays?";

  private subject = new BehaviorSubject("");
  getPublicHolidays(data: any) {
    let inputRequest = `${this.url}`.concat(
      `countryIsoCode=${data.countryCode}&validFrom=${data.startDate}&validTo=${data.endDate}`
    );
    return this.http.get(inputRequest);
  }

  setCountryCode(data: string) {
    this.subject.next(data);
  }

  getCountryCode(){
    return this.subject;
  }
}
