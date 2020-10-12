import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

// below i.e @Output is a directive which is use to call parent function i.e parentComponent  
// In below code any is data type
//parentComponent is function to be called by EventEmitter object which is emit
  @Output() parentComponent:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // below using EventEmitter object "emit" to call function parentComponent

// eg:1 passing only name directly
// this.parentComponent.emit("hi there!")  

// eg:1 passing value via object 
// this.parentComponent.emit({name:'lemon',age:21})  
  }
// below function to send data to parent through a button 
  sendData(){
  let item ={name:'lemon',age:21}
  this.parentComponent.emit(item)  
  }

}
