# Send data  child  to parent In Angular 👋🏻

## Changes have done  in ✍🏿
* app.components.html
* app.components.ts
* user.components.html
* user.components.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
### To Do 📝
* Make a user coponent
* Use it inside app component as child
* Pass data from child to parent with EventEmitter  
#### Step by step 🚶🏻‍♂️🚶🏻‍♂️
 * Make a function in parent component  and call it from child component **i.e user.component.ts** file 
 * We will make parent funciton with parameter in app.component.ts file and the we'll pass this param to child
 * Go to child component ts file i.e **user.component.ts**  and import **Output** and **EventEmitter** 
   * import { Component, OnInit,Output,EventEmitter } from '@angular/core';
 * EventEmitter  is only method which can call parent from child
 * To call parent function  **i.e parentComponent** from child we define a directives i.e **@Output** in child component
 * To send data from child to parent through a button , make a button in child component i.e **users.component.html** file  and also make a click event to send data and then  define that click event function in child component i.e  **user.component.ts** file
  
