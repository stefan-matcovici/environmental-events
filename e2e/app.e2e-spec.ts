import { DashboardPage } from './app.po';
import { EventsPage } from './app.po';
import { EventDetailsPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('environmental-events App', () => {
  let page: DashboardPage;
  let pageList: EventsPage;
  let pageDetails: EventDetailsPage;

  beforeEach(() => {
    page = new DashboardPage();
    pageList = new EventsPage();
    pageDetails = new EventDetailsPage();
  });

    it('Should display correct Newest Events heading', () => {
      page.navigateTo();
      expect (page.getHeading().isDisplayed()).toBe(true);
    });

    //  it('Should display correct map', () => {
    //    page.navigateTo();
    //    expect (page.getNguiMap().isPresent()).toBe(true);
    //    browser.sleep(5000);
    //  })

  //   it('Should display correct map class', () => {
  //     page.navigateTo();
  //     expect (page.getMap().isDisplayed()).toBe(true);
  //   });

  //  it('Should check if correct map marker exists', () => {
  //    page.navigateTo();
  //    expect (page.getMarker().isPresent()).toBe(true);
  //  });

   it('Should display correct container', () => {
     pageList.navigateTo();
     expect (pageList.getContainer().isDisplayed()).toBe(true);
   });

   it('Should display correct card block', () => {
     pageList.navigateTo();
     expect (pageList.getCardBlock().isDisplayed()).toBe(true);
   });

   it('Should display correct card title', () => {
     pageList.navigateTo();
     expect (pageList.getCardTitle().isDisplayed()).toBe(true);
   })

   it('Should display correct card text', () => {
     pageList.navigateTo();
     expect (pageList.getCardText().isDisplayed()).toBe(true);
   })

   it('Should display correct delete button', () => {
     pageList.navigateTo();
     expect (pageList.getDeleteButton().isDisplayed()).toBe(true);
   })

   it('Should display correct edit button', () => {
     pageList.navigateTo();
     expect (pageList.getEditButton().isDisplayed()).toBe(true);
   })

   it('Should display correct event form', () => {
     pageList.navigateTo();
     expect(pageList.getEventForm().isDisplayed()).toBe(true);
   })

   it('Should display correct event card block', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getCardBlock().isDisplayed()).toBe(true);
   })

   it('Should display correct unordered list', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getUL().isDisplayed()).toBe(true);
   })

   it('Should display correct list item', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getLI().isDisplayed()).toBe(true);
   })

   it('Should display correct event title', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getTitle().isDisplayed()).toBe(true);
   })

   it('Should display correct event information', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getInfo().isDisplayed()).toBe(true);
   })

   it('Should display correct event map', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getMap().isDisplayed()).toBe(true);
   })

   it('Should display correct back button', () => {
     pageDetails.navigateTo();
     expect(pageDetails.getBackButton().isDisplayed()).toBe(true);
   })

  it('Should display correct save button', () => {
    pageDetails.navigateTo();
    expect(pageDetails.getSaveButton().isDisplayed()).toBe(true);
  })

});
