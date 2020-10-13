# Show List from API Data  🚀🚀

## Changes have done  in ✍
* users-service.service.ts 
* app.module.ts 
* app.component.ts
* app.component.html

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
###  To Do 📝
* What is API
* How to fetch API data in service
* Import in component
* Get data in component
* How to show that data in html form which are coming from API

#### Step by step 🚶🏻‍♂️🚶🏻‍♂️
* Open cmd and create new service
  * command : ng g service service-name   
* To call API first we have to call HTTP client so we will import http client in **users-service.service.ts** file
* Then make an instance of that http client (eg:http) in **users-service.service.ts** file file
* Then make a function to get data from API (eg:getData) in **users-service.service.ts** file file
* Go to **app.module.ts** file and import Http module  and then register that module into import section 
* Go to  **users-data.service.ts** file and write return value using get method
* Now go  in that component where you want to fetch data through API (In this case **app.component.ts file**) 
* Now import user service component in **app.component.ts file** file
* Make a html table in **app.component.ts** file to show API data
* Define a property in **app.component.ts**  (eg:allData) file as arrya to store all those data coming from API
* Now to write a for loop to show data in html table (eg:*ngFor)
