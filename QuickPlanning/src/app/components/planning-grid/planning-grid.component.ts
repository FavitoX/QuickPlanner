import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-planning-grid',
  templateUrl: './planning-grid.component.html',
  styleUrls: ['./planning-grid.component.scss']
})
export class PlanningGridComponent implements OnInit { 
  columnDefs = [
    { headerName: this.i18nService.instant('project.name'), field: 'project', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.item'), field: 'item', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.version'), field: 'version', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.status'), field: 'status', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.product'), field: 'product', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.duration'), field: 'duration', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.plannedStart'), field: 'plannedStart', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.plannedEnd'), field: 'plannedEnd', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.calculatedEnd'), field: 'calculatedEnd', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.realStart'), field: 'realStart', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.realEnd'), field: 'realEnd', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.delay'), field: 'delay', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.totalDeviation'), field: 'totalDeviation', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation1'), field: 'deviation1', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation2'), field: 'deviation2', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation3'), field: 'deviation3', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation4'), field: 'deviation4', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation5'), field: 'deviation5', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation6'), field: 'deviation6', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation7'), field: 'deviation7', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation8'), field: 'deviation8', filter: true, sortable: true },
    { headerName: this.i18nService.instant('project.deviation9'), field: 'deviation9', filter: true, sortable: true }
  ];

  rowData = [
  ];

  constructor(private i18nService: TranslateService, projectService: ProjectService) {
    this.rowData = projectService.getData().planning.planningEntry;

  }

  ngOnInit(): void {
    
  }
}
