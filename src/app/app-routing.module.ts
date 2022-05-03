import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  
  

  { path: 'login', component: LoginComponent},

  { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent },
  { path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
