import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestcComponent } from './components/testc/testc.component';


const routes: Routes = [
  { path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'test/:id',component:TestcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
