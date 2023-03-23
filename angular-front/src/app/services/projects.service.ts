import { Injectable } from '@angular/core';
import { Project } from '../common/project';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getProjects(url: string): Observable<Project[]> {

    return this.httpClient.get<GetResponseProjects>(url).pipe(
      map(response => response.projects)
    );
  }
}

interface GetResponseProjects {
  projects: Project[];
}