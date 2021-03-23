import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PersonaConsultaComponent } from './hotel/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './hotel/persona-registro/persona-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
