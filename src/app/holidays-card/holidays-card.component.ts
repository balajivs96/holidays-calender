import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-holidays-card',
  templateUrl: './holidays-card.component.html',
  styleUrls: ['./holidays-card.component.scss'],
})
export class HolidaysCardComponent {
  @Input()
  getHolidayInfo: any = [];

  selectedCountryCode: any;
  constructor(private api: ApiService) {
    this.api.getCountryCode().subscribe((res) => {
      this.selectedCountryCode = res;
    });
  }
  getCurrentDate() {
    return formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }
}
