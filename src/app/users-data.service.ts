import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

constructor() { }
// below function to get data
getData(){
  return {
    name:'lemon',
    age:22,
    id:10
  }
}

}
