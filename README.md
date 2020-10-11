# Pass data parent to child  In Angular 👋🏻
## Changes have done  in ✍🏿
* app.components.html
* app.components.ts
* users.components.html
* users.components.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
### To Do 📝
* Make  any (let say : users) component 
   * command: ng g c users
* Make users component the child  component of app component
* Pass data from  app component to child component 
* Display data in child component  
#### Step by Steps 🚶🏻‍♂️🚶🏻‍♂️
* Make a users coponent using command
* Go to **users.component.ts** file and copy it's selector name and paste it in **app.component.html** file
* Define a child coponent in **app.component.html file** (eg:h3)
* Define a property in **app.component.ts** file to send data from **app.component.html**(parent) to **users.component.html**(child) 
* In this first i will send a normal name and then i will send one object  
* Binding property(data) by property binding method in **app.compoent.html** (eg:name)
* Now go to child component i.e **users.component.ts** file an import input
* Go to **users.component.html** file to get parent data and display it on browser
* To get data in console you can write console code in **users.console.ts** file to get data
