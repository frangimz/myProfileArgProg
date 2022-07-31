import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortadaComponent } from './components/portada/portada.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { InterceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewAptitudComponent } from './components/aptitudes/new-aptitud.component';
import { EditAptitudComponent } from './components/aptitudes/edit-aptitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    AptitudesComponent,
    EducacionComponent,
    ExperienciaComponent,
    LogoArgProgComponent,
    PortadaComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent,
    NewAptitudComponent,
    EditAptitudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
