import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewAptitudComponent } from './components/aptitudes/new-aptitud.component';
import { EditAptitudComponent } from './components/aptitudes/edit-aptitud.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

const routes: Routes =[
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id',component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id',component: EditEducacionComponent},
  {path: 'editperfil/:id',component: EditAcercaDeComponent},
  {path: 'nuevaskill', component: NewAptitudComponent},
  {path: 'editskill/:id', component: EditAptitudComponent},
  {path: 'nuevoproy', component: NewProyectoComponent},
  {path: 'editproy/:id', component: EditProyectoComponent},
  {path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
