import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ UserComponent } from './user/user.component'
import{ AdminComponent } from './admin/admin.component'

const routes: Routes = [
  {
    path:'user',  // this is path for user component 
    component: UserComponent 
  },
  {
    path:'admin',  // this is path for admin componet 
    component: AdminComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
