import { Component } from '@angular/core';
import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'angular2-dynamic-components-app',
  templateUrl: 'angular2-dynamic-components.component.html',
  styleUrls: ['angular2-dynamic-components.component.css'],
  directives: [DashboardComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/', component: DashboardComponent }
])

export class Angular2DynamicComponentsAppComponent {

  constructor(private router: Router) {

  }
}
