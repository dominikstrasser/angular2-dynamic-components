import { Component, OnInit, ViewContainerRef, ViewChild, ComponentResolver, Type, AfterViewInit } from '@angular/core';
import { BlueComponent } from '../blue';
import { GreenComponent } from '../green';
import { RedComponent } from '../red';


interface IModel {
  zone: ViewContainerRef,
  component: Type
}

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  private model: IModel[] = [];

  @ViewChild('zone1', { read: ViewContainerRef }) zone1: ViewContainerRef
  @ViewChild('zone2', { read: ViewContainerRef }) zone2: ViewContainerRef
  @ViewChild('zone3', { read: ViewContainerRef }) zone3: ViewContainerRef

  constructor(private resolver: ComponentResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.model = [
      {
        zone: this.zone1,
        component: BlueComponent
      },
      {
        zone: this.zone2,
        component: GreenComponent
      }, {
        zone: this.zone3,
        component: RedComponent
      }
    ];
    this.renderZone();
  }

  renderZone() {
    this.model.forEach(m => {
      this.resolver.resolveComponent(m.component).then(factory => {
        m.zone.createComponent(factory);
      })
    })

  }


}
