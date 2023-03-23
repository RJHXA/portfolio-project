import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectsService } from './services/projects.service';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CertificationComponent } from './components/certification/certification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AboutMeComponent,
    ProjectsPageComponent,
    TechnologiesComponent,
    CertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
