import { Injectable } from '@angular/core';
import { IPlanning } from '../models/iplanning';
import { IProject } from '../models/iproject';
import { DockingService } from './docking.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private dockingService: DockingService) {
    this.loadProjects();

  }

  getData() {
    return this.loadProjects();

    // return [
    //   { project: 'Proj 01', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: 'Proj 01', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: 'Proj 01', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: '', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: '', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: '', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: '', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 },
    //   { project: '', item: '', version: '', status: '', product:'', duration: 4, plannedStart: '',
    //     plannedEnd: '', calculatedEnd: '', realStart: '', realEnd: '', delay: 0, totalDeviation: 0,
    //     deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
    //     deviation7: 0, deviation8: 0, deviation9: 0 }
    // ];
  }

  public loadProjects(): IProject {
    let planning: IPlanning = { planningEntry: [
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
      { id: 0, dependency: 0, item: '', version: '', status: '', product:'', duration: 4, plannedStart: new Date('2020-09-11'),
        plannedEnd: new Date('2020-09-11'), calculatedEnd: new Date('2020-09-11'), realStart: new Date('2020-09-11'), 
        realEnd: new Date('2020-09-11'), delay: 0, totalDeviation: 0,
        deviation1: 0, deviation2: 0, deviation3: 0, deviation4: 0, deviation5: 0, deviation6: 0,
        deviation7: 0, deviation8: 0, deviation9: 0 },
    ] };
    
    
    let project: IProject = { project: 'QuickPlanner', planning: planning };

    return project;
  }
}