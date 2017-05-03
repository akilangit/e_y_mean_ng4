import { MyDataBindingPage } from './app.po';

describe('my-data-binding App', () => {
  let page: MyDataBindingPage;

  beforeEach(() => {
    page = new MyDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
