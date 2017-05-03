import { ComponentExamplePage } from './app.po';

describe('component-example App', () => {
  let page: ComponentExamplePage;

  beforeEach(() => {
    page = new ComponentExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
