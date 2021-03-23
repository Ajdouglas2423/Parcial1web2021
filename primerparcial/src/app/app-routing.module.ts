import { NgModule } from '@angular/core';
import { PersonaConsultaComponent } from './hotel/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './hotel/persona-registro/persona-registro.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'personaConsulta',
  component: PersonaConsultaComponent
  },
  {
  path: 'personaRegistro',
  component: PersonaRegistroComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
