export class Angular2DynamicComponentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-dynamic-components-app h1')).getText();
  }
}
