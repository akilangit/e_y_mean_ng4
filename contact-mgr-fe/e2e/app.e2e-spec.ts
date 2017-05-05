import { ContactMgrFePage } from './app.po';

describe('contact-mgr-fe App', () => {
  let page: ContactMgrFePage;

  beforeEach(() => {
    page = new ContactMgrFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
