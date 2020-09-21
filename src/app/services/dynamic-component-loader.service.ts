import { Injectable, ComponentFactoryResolver, Type, Injector, ApplicationRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService {

  constructor(private factoryResolver: ComponentFactoryResolver,
              private injector: Injector, private app: ApplicationRef) { 

  }

  addDynamicComponent<T>(elementNode: HTMLElement, component: Type<T>) {
    const factory = this.factoryResolver.resolveComponentFactory(component);

    const newComponent = factory.create(this.injector, [], elementNode);
    this.app.attachView(newComponent.hostView);
  }
}
