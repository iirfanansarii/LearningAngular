# Reusable component In Angular 👋🏼
## Changes have done  in ✍🏿
* app.components.html
* app.components.ts
* users.components.html
* users.components.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
### To Do 📝 
* Make  any component (let say : users) 
   * command: ng g c users
* Make users component the child  component of app component
* Pass data from  app component to child component 
* Display data in child component  

#### Step by Steps 🚶🏻‍♂️🚶🏻‍♂️
* Make a users coponent using command
* Go to **users.component.ts** file and copy it's selector name and paste it in **app.component.html** file
* Define a div  in **app.component.html** file 
* Define a property in **app.component.ts** file to send from **app.component.html** (parent) to **users.component.html**(child) 
* To pass the value in child component i.e **users.componenet.html** file we define a property name( eg:data) and then we pass that value to **users.component.ts** file property (eg:users) 
* We  bind property name using property binding method in **app.compoent.html** (eg:data)
* Now go to child component ts file i.e **users.component.ts** file and import input
* Go to **users.component.html** file to get parent data and display it on browser
* To get data in console you can write console code in **users.console.ts** file to get data









