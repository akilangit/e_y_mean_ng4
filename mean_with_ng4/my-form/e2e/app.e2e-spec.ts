import { MyFormPage } from './app.po';

describe('my-form App', () => {
  let page: MyFormPage;

  beforeEach(() => {
    page = new MyFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
