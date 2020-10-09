import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnangular';
  newMessage='message-with-variable'
  // getMessage(){
  //   alert("function without parameter")
  getMessage(name){
    alert(name)
  }
  }
  
 