import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './Components/analog-clock/analog-clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DigitalClockComponent } from './Components/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
