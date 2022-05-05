import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './guards/login.guard';

import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
  
  

  { path: 'login', component: LoginComponent},

  // { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  // LazyLoading
  {path: 'bienvenida', 
   loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule),
   canActivate:[LoginGuard],
  },

  { path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
