import { Component, OnInit } from '@angular/core';
import { DockManager } from "dock-spawn-ts/lib/js/DockManager";
import { PanelContainer } from "dock-spawn-ts/lib/js/PanelContainer";
import { PanelType } from "dock-spawn-ts/lib/js/enums/PanelType";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => { 
      this.initializeDocking(); 
    }, 200);
  }


  initializeDocking(): void {
    let divDockContainer = document.getElementById('dock_div');
    let divDockManager = document.getElementById('my_dock_manager');
    let dockManager = new DockManager(divDockManager);
    dockManager.initialize();

    window.onresize = () => {
      dockManager.resize(
        divDockContainer.clientWidth,
        divDockContainer.clientHeight
      );
    };
    window.onresize(null);

    let solution = new PanelContainer(document.getElementById("solution_window"), dockManager);
    let properties = new PanelContainer(document.getElementById("properties_window"), dockManager);
    let toolbox = new PanelContainer(document.getElementById("toolbox_window"), dockManager);
    let outline = new PanelContainer(document.getElementById("outline_window"), dockManager);
    let problems = new PanelContainer(document.getElementById("problems_window"), dockManager);
    let output = new PanelContainer(document.getElementById("output_window"), dockManager);
    let editor1 = new PanelContainer(document.getElementById("editor1_window"), dockManager, null, PanelType.document);
    let editor2 = new PanelContainer(document.getElementById("editor2_window"), dockManager, null, PanelType.document);
    editor2.hideCloseButton(true);
    let infovis = new PanelContainer(document.getElementById("infovis"), dockManager);

    infovis.width = 600;
    infovis.height = 400;

    let documentNode = dockManager.context.model.documentManagerNode;
    let outlineNode = dockManager.dockLeft(documentNode, outline, 0.15);
    dockManager.dockFill(outlineNode, solution);
    dockManager.dockDown(outlineNode, properties, 0.6);
    let outputNode = dockManager.dockDown(documentNode, output, 0.2);
    dockManager.dockRight(outputNode, problems, 0.40);
    dockManager.dockRight(documentNode, toolbox, 0.20);
    dockManager.dockFill(documentNode, editor1);
    dockManager.dockFill(documentNode, editor2);
    dockManager.floatDialog(infovis, 50, 50);
  }
}
