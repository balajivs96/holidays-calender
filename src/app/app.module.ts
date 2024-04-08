import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HolidaysViewComponent } from './holidays-view/holidays-view.component';
import { HolidaysCardComponent } from './holidays-card/holidays-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from './material-design/material-design.module';
@NgModule({
  declarations: [AppComponent, HolidaysViewComponent, HolidaysCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
