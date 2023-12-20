import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { PropertyComponent } from './components/organisation/property/property.component';
import { WorkMethodComponent } from './components/organisation/work-method/work-method.component';
import { BmvTeamsComponent } from './components/organisation/bmv-teams/bmv-teams.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    IntroComponent,
    OrganisationComponent,
    PropertyComponent,
    WorkMethodComponent,
    BmvTeamsComponent,
    ProjectsComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
