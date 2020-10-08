import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnangular';
  appName='iamans'
  // interpolation 
  name="irfan ansari"
  getName()
  {
    return this.name
  }
  obj={
    name:'irfan',
    age:21
  }
  arr=['ans','ms','lol']
  a=100;
  b=200;
  siteUrl= window.location.href
}
