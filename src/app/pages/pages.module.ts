import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionesComponent } from './conversiones/conversiones.component';
import { CalculaFechaComponent } from './calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CambioLetrasPipe } from '../pipes/cambio-letras.pipe';
import { EstadoCivilPipe } from '../pipes/estado-civil.pipe';
import { LoadingComponent } from '../components/loading/loading.component';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent,
    ConversionesComponent,
    CalculaFechaComponent, 
    FormularioComponent,
    BienvenidaComponent,
    HeaderComponent,
    CambioLetrasPipe,
    EstadoCivilPipe,
    LoadingComponent


  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    PagesRoutingModule

  ]
})
export class PagesModule { }
