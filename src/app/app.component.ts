import { Component } from '@angular/core';
// below defining an interface

interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
getData(){
  const data:dataType={
    name :'koi bhi' ,
    id:10,
    indian:true,
    address:"somewhere in world " 
  }
  return data;
}

}