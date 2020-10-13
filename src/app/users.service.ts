import { Injectable } from '@angular/core';

// method-1 for interface
import {dataType} from './user'

// method-2 for interface

// interface dataType{
//   name:string,
//   id:number,
//   indian:boolean,
//   address:any
// }



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){

    const data:dataType={
    name :"koi bhi",
    id:10,
    indian:true,
    address:"644-2-3/01 somewhere " 
  }
  return data;
}

}
