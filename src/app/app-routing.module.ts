import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MynotesComponent } from './mynotes/mynotes.component';


const routes: Routes = [

  {
    path:"login",
    component:LoginComponent //,
    //children:[{path:"mynotes",component:MynotesComponent}]
  },
  {
    path:"mynotes",
    component:MynotesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
