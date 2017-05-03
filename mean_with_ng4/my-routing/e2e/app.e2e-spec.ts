import { MyRoutingPage } from './app.po';

describe('my-routing App', () => {
  let page: MyRoutingPage;

  beforeEach(() => {
    page = new MyRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
