import { ElementRef, Injectable, Renderer2, RendererFactory2, Type } from '@angular/core';
import { DockManager } from "dock-spawn-ts/lib/js/DockManager";
import { PanelContainer } from "dock-spawn-ts/lib/js/PanelContainer";
import { PanelType } from "dock-spawn-ts/lib/js/enums/PanelType";
import { DynamicComponentLoaderService } from './dynamic-component-loader.service';

@Injectable({
  providedIn: 'root'
})
export class DockingService {
  private dockingContainer: ElementRef;
  private dockingManager: ElementRef;
  private dockManager: DockManager;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2,
              private dynamicComponentService: DynamicComponentLoaderService) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initializeDocking(dockingContainer: ElementRef, dockingManager: ElementRef): void {
    this.dockingContainer = dockingContainer;
    this.dockingManager = dockingManager;

    this.dockManager = new DockManager(this.dockingManager.nativeElement);
    this.dockManager.initialize();

    window.onresize = () => {
      this.dockManager.resize(
        this.dockingContainer.nativeElement.clientWidth,
        this.dockingContainer.nativeElement.clientHeight
      );
    };
    window.onresize(null);
  }

  public AddDocument<T>(name: string, component: Type<T>): void {
    let documentNode = this.dockManager.context.model.documentManagerNode;
    let newDiv: HTMLElement = this.renderer.createElement('div');
    let gridContainer: HTMLElement = this.renderer.createElement('div');
    let gridTemplate: HTMLElement = this.renderer.createElement('ng-template');
    this.renderer.setAttribute(gridContainer, 'class', 'document-editor');
    this.renderer.setAttribute(newDiv, 'hidden', '');
    
    gridContainer.appendChild(gridTemplate);
    newDiv.appendChild(gridContainer);

    this.dockingContainer.nativeElement.append(newDiv);
    let document = new PanelContainer(newDiv, this.dockManager, name, PanelType.document, false);
    this.dockManager.dockFill(documentNode, document);

    this.dynamicComponentService.addDynamicComponent(gridTemplate, component);
  }

  public AddSolutionExplorer(name: string): void {
    let documentNode = this.dockManager.context.model.documentManagerNode;
    let newDiv: HTMLElement = this.renderer.createElement('div');
    this.renderer.setAttribute(newDiv, 'hidden', '');

    this.dockingContainer.nativeElement.append(newDiv);
    let solution = new PanelContainer(newDiv, this.dockManager, name, PanelType.panel, true);
    this.dockManager.dockLeft(documentNode, solution, 0.15);
  }

  public addFloatingWindow(title: string, width: number, height: number, x: number, y: number) : void {
    let newDiv: HTMLElement = this.renderer.createElement('div');
    let floatWindows = new PanelContainer(newDiv, this.dockManager, title);
    floatWindows.width = width;
    floatWindows.height = height;
    
    this.dockManager.floatDialog(floatWindows, x, y);
  }
}