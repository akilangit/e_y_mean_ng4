import { MyServicePage } from './app.po';

describe('my-service App', () => {
  let page: MyServicePage;

  beforeEach(() => {
    page = new MyServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
