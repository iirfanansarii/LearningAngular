#  Page not found | angular routing | 404 page 👋🏻
## Changes have done  in ✍🏿
* app.components.html
* app.routing.module.ts

## Here You Go 🏃
  1. Go to src folder 
  2. Go to app folder
  
  ### To Do 📝
* Create new angular project
  * command:  ng g projoect-name  and then select y in cmd to install routing 
* Create 2 component in that project for routing and one for 404 page
* Add routing in **app-routing.module.ts** file
* Write code in html file for making routing link
* Test Routing    

_Note: If inside app folder  **app-routing.module.ts** file is present then routing has installed successfully_
  
_Note:_
  * If you did not select add routing option while creating then you can add routing from below command
      * command: ng generate module app -routing --flat --module=app   
      
 ##### Steps by step 🚶🏻‍♂️🚶🏻‍♂️
* Add routing to project while creating new angular project
* Go to **app-routing.module.ts** file and import  user, admin and page-not-found-component in that file
* In **app-routing.module.ts** file also define path for both component
* Make two anchor tag for user and admin component in **app.component.html** file for routing 
* Now we will use user and admin component path for routing 
* Add <router-outlet> to get user and admin data  on browser
* In 404 page we create one more component for page-not-found-component and  set it's path equla to double star (i.e path:'**' )
* Double star is known as wild card .  
* Wild card is that pagenroute or path which is universally present to all that page which are absent.



