import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { LoginComponent } from './auth/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { AngularMaterialModule } from './angular-material/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';
import localeEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import { EstadoCivilPipe } from './pipes/estado-civil.pipe';
import { LoadingComponent } from './components/loading/loading.component';

registerLocaleData(localeEs); // empleamos la funcion  y le pasamos como parametro "localEs" que esta cargada con la region de español México



@NgModule({
  declarations: [
    AppComponent,
    ConversionesComponent,
    CalculaFechaComponent,
    FormularioComponent,
    LoginComponent,
    BienvenidaComponent,
    NoPageFoundComponent,
    PagesComponent,
    HeaderComponent,
    CambioLetrasPipe,
    EstadoCivilPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
