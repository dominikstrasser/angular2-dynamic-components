import { Angular2DynamicComponentsPage } from './app.po';

describe('angular2-dynamic-components App', function() {
  let page: Angular2DynamicComponentsPage;

  beforeEach(() => {
    page = new Angular2DynamicComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-dynamic-components works!');
  });
});
