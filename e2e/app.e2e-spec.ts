import { GPSuivieFactPage } from './app.po';

describe('gpsuivie-fact App', () => {
  let page: GPSuivieFactPage;

  beforeEach(() => {
    page = new GPSuivieFactPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
