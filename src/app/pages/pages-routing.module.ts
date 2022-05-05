import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
      path: '',
      component: PagesComponent,
      canActivate:[LoginGuard],
      children: [
          // Ya que para poder ver estas rutas necesitaremos pasar una autenticacion ahora se encuentran en el path 'bienvenida/elmodulodeseado
          // Ahora para poder accesar a estas rutas hijas, es necesario pasar por 'bienvenida'
          { path: '', component: BienvenidaComponent },  
          { path: 'fecha', component: CalculaFechaComponent },
          { path: 'conversiones', component: ConversionesComponent },
          { path: 'formulario', component: FormularioComponent },

      ]
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ], 
  exports:[RouterModule]
})
export class PagesRoutingModule { }
