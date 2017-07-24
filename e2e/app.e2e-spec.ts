import { BestOfPage } from './app.po';

describe('best-of App', () => {
  let page: BestOfPage;

  beforeEach(() => {
    page = new BestOfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
