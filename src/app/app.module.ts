import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Below i am importing button and slider API 

import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
