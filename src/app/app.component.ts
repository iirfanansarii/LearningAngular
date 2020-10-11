import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'learnangular';  
//first example without array
// users={
// name:'lemon rice',
// age:22,
// address:'somewhere on earth'
//  }

//  second example with array

users1=[
  {
  name:'dom',
  age:22,
  address:'On Google Map'
 },

 {
  name:'sam',
  age:22,
  address:'earth'
 },

 {
  name:'Romi',
  age:21,
  address:'earth'
 }
]
}
