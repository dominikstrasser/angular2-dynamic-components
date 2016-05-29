import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2DynamicComponentsAppComponent } from '../app/angular2-dynamic-components.component';

beforeEachProviders(() => [Angular2DynamicComponentsAppComponent]);

describe('App: Angular2DynamicComponents', () => {
  it('should create the app',
      inject([Angular2DynamicComponentsAppComponent], (app: Angular2DynamicComponentsAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
