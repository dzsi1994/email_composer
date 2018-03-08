import { EburyPage } from './app.po';

describe('ebury App', () => {
  let page: EburyPage;

  beforeEach(() => {
    page = new EburyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
