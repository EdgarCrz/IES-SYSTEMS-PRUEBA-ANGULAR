import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'fecha', component: CalculaFechaComponent },
  { path: 'conversiones', component: ConversionesComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
