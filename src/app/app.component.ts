import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'learnangular';  
 
  // below defining property for parent child
   data="Lemon"

  // below defining object 
  devil={
    name:'princess',
    age:21
  }

}
  
 