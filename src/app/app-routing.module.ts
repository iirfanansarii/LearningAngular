import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ UserComponent } from './user/user.component'
import{ AdminComponent } from './admin/admin.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path:'user',  // this is path for user component 
    component: UserComponent 
  },
  {
    path:'admin',  // this is path for admin componet 
    component: AdminComponent 
  },
  // below is third route or path
  // If you are making a route for that page which  is universally open i.e when a page didn't find (404)
  // then we use double star and that is also known as  wild card
  {
   path:'**' ,
   component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
