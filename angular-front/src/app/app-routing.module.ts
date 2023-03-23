import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificationComponent } from './components/certification/certification.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const routes: Routes = [
  {path: 'certification', component: CertificationComponent},
  {path: 'technologies-page', component: TechnologiesComponent},
  {path: 'projects-page', component: ProjectsPageComponent},
  {path: 'about-me-page', component: AboutMeComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: '**', redirectTo: '/main-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
