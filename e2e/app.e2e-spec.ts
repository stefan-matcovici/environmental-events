import { EnvironmentalEventsPage } from './app.po';

describe('environmental-events App', () => {
  let page: EnvironmentalEventsPage;

  beforeEach(() => {
    page = new EnvironmentalEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
