import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  name=""
 // below making obejct of UsersDataService
  constructor (private user:UsersDataService){
   
// to print data in console
console.warn(this.user.getData)

// To get data from console or from above command
let data=this.user.getData();
this.name=data.name

}



}