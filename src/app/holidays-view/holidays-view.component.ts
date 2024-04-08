import { formatDate } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-holidays-view',
  templateUrl: './holidays-view.component.html',
  styleUrls: ['./holidays-view.component.scss']
})
export class HolidaysViewComponent {
  holidays = new Holidays();
  getHolidayInfo: any = [{}];

  constructor(private api: ApiService) {}

  @Output() setHolidays = new EventEmitter<any>();
  panelOpenState = false;

  @ViewChild("form", { static: false })
  holidaysForm!: NgForm;

  getHolidays(date: any) {
    let data = {
      countryCode: date.countryCode,
      startDate: formatDate(date.startDate, "yyyy-MM-dd", "en-US"),
      endDate: formatDate(date.endDate, "yyyy-MM-dd", "en-US"),
    };

    this.api.setCountryCode(data.countryCode);
    this.api.getPublicHolidays(data).subscribe((res) => {
      this.getHolidayInfo = res;
      this.setHolidays.emit(res);
    });
  }

  getCurrentDate() {
    return formatDate(new Date(), "yyyy-MM-dd", "en-US");
  }

  dateRangeValidator(startDate: any, endDate: any) {
    let sDate = formatDate(startDate.value, "yyyy-MM-dd", "en-US");
    let eDate = formatDate(endDate.value, "yyyy-MM-dd", "en-US");
    if (sDate && eDate) {
      const start = new Date(sDate);
      const end = new Date(eDate);
      if (end <= start) {
        endDate.control.setErrors({ endDateInvalid: true });
      } else {
        endDate.control.setErrors(null);
      }
    }
  }
}


export class Holidays {
  countryCode!: string;
  startDate!: string;
  endDate!: string;
  constructor() {}
}