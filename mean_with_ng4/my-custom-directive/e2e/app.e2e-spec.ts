import { MyCustomDirectivePage } from './app.po';

describe('my-custom-directive App', () => {
  let page: MyCustomDirectivePage;

  beforeEach(() => {
    page = new MyCustomDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
