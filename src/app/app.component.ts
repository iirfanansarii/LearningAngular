import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'learnangular';
 //below for normal array 
// arrayName=['lemon','lolipop','devil']
//below for array of object
arrayName=[
  {
    name:'lemon',
    age:22

  },
 {
    name:'lolipop',
    age:21

  },
   {
    name:'devil',
    age:23

  }
  

]
}
  
 