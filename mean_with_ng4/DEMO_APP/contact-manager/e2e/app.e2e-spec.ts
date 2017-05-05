import { ContactManagerPage } from './app.po';

describe('contact-manager App', () => {
  let page: ContactManagerPage;

  beforeEach(() => {
    page = new ContactManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
