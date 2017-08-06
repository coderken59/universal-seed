import { UniversalSeedPage } from './app.po';

describe('universal-seed App', () => {
  let page: UniversalSeedPage;

  beforeEach(() => {
    page = new UniversalSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
