import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) {}

  getProjects(): Observable<Project[]>{
    this.messageService.add('ProjectService: fetched Project');
    return of(PROJECTS);
  } 

  getProject(id: number): Observable<Project> {
    this.messageService.add('ProjectService: fetching Project id =${id}');
    return of(PROJECTS.find(project => project.id === id));
  }
}
