import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'learnangular';  

// Send data to console
name=""
parentComponent(data){
console.warn(data)
//below to get name 
this.name=data.name
}
}
