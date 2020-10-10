import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'learnangular';

  //below defining color property for dynamic style
  color="orange"

//  below dynminc style function to change color
changeColor(){
  this.color="red"
}
// below condtional style 
  err=false;
}
  
 