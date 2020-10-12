import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'learnangular';  
name='elon musk'
today=Date.now();  // using Date.now function to show timestamp
str ="Hello angular";
val=10
}
