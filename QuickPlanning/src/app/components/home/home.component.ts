import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DockingService } from 'src/app/services/docking.service';
import { PlanningGridComponent } from '../planning-grid/planning-grid.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dockContainer') dockContainer: ElementRef;
  @ViewChild('dockManager') dockManager: ElementRef;

  constructor(private dockingService: DockingService, private translator: TranslateService) { 

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => { 
      this.dockingService.initializeDocking(this.dockContainer, this.dockManager);
      this.dockingService.AddSolutionExplorer(this.translator.instant("application.solution"));
      this.dockingService.AddDocument("Planning 1", PlanningGridComponent);
      this.dockingService.AddDocument("Planning 2", PlanningGridComponent);
      this.dockingService.AddDocument("Planning 3", PlanningGridComponent);
      this.dockingService.AddDocument("Planning 4", PlanningGridComponent);
      this.dockingService.addFloatingWindow("Properties", 600, 400, 200, 200);
    }, 200);
  }
}