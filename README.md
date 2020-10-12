#  Services in Angular 👋🏻
## Changes have done  in ✍🏿
* app.components.html
* custom-style.directive.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
### To Do 📝
* What is service in angular
* How to make service
* How to use service
* Example       

[What is directive](https://angular.io/guide/architecture-services)

_Note_ 
* Serives are neither component dependent nor module dependent.
* That mean services can be use in many module any where any many times.

#### Step by step 🚶🏻‍♂️🚶🏻‍♂️
* Create new cusotm directive using command
* Define some html elemen inside **app.component.html** file to apply custom directive
* Go to **custom-style.directive.ts** file and coppy selector 
* Paste selector inside **app.component.html** file html element
* Go to **custom-style.directive.ts** file and import ElementRef element
* Make an instance of ElementRef inside constructor of ElementRef
* Once instance define then we can use css on that instance.
* so we can use **custom-style.directive.ts** file selector to manipulate any html elemet

##### Service In Brief 💼
* The man use of service is to share data among 2-3 components.
* We can write code inside services and from there we can share that data to any component.
* We use services so we don't need to write same code in all coponent.
