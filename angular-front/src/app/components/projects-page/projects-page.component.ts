import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project [] = [];

  private projectsUrl = 'http://127.0.0.1:8000/api/projects?format=json&page=';
  private tempUrl = 'http://127.0.0.1:8000/api/projects?format=json&page=';
  private page_number: number = 1;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tempUrl = this.tempUrl + this.page_number;
    this.showProjects(this.tempUrl);
  }

  showProjects(url: string) {
    this.projectService.getProjects(url).subscribe(
      data => {
        this.projects = data;
      }
    );
  }

  nextProjects() {
    this.page_number = this.page_number + 1;
    if(this.page_number < 4) {
      const url = this.projectsUrl + this.page_number;
      console.log(url);
      this.showProjects(url);
    }
    else {
      this.page_number = this.page_number - 1;
    }
  }

  backProjects() {
    this.page_number = this.page_number - 1;
    if(this.page_number >= 1) {
      const url = this.projectsUrl + this.page_number;
      console.log(url);
      this.showProjects(url);
    }
    else {
      this.page_number = this.page_number + 1;
    }
  }
}