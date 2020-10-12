#  Custom Directives in Angular 👋🏻
## Changes have done  in ✍🏿
* app.components.html
* custom-style.directive.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
### To Do 📝
* What is directive
* Exmple of default directive
* How to make custom directive
  *command: ng g directive directive-name  
* Use it with html  

[What is directive](https://angular.io/guide/attribute-directives)

_Note: Directives are use to manipulates  DOM or html_

#### Step by step 🚶🏻‍♂️🚶🏻‍♂️
* Create new cusotm directive using command
* Define some html elemen inside **app.component.html** file to apply custom directive
* Go to **custom-style.directive.ts** file and coppy selector 
* Paste selector inside **app.component.html** file html element
* Go to **custom-style.directive.ts** file and import ElementRef element
* Make an instance of ElementRef inside constructor of ElementRef
* Once instance define then we can use css on that instance.
* so we can use **custom-style.directive.ts** file selector to manipulate any html elemet
