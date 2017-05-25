import { browser, element, by } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard'); // for each page - test elements (css)
  }

  getHeading(){
    return element(by.css('h2'));
  }

  getNguiMap(){
    return element(by.tagName('ngui-map'));
  }

  getMap(){
    return element(by.className('harta'));
  }
  
  getMarker(){
    return element(by.css('marker'));
  }
  
}

export class EventsPage {
  navigateTo() {
    return browser.get('/events');
  }

  getContainer(){
    return element(by.className('container'));
  }

  getCardBlock(){
    return element(by.className('card-block'));
  }

  getCardTitle(){
    return element(by.className('card-title'));
  }

  getCardText(){
    return element(by.className('card-text'));
  }

  getDeleteButton(){
    return element(by.className('mb-2 mx-2 btn btn-danger pull-right'));
  }

  getEditButton(){
    return element(by.className('mb-2 mx-2 btn btn-success pull-right'));
  }

  getEventForm(){
    return element(by.tagName('app-event-form'));
  }

}

export class EventDetailsPage {
  navigateTo() {
    return browser.get('detail/15');
  }

  getCardBlock(){
    return element(by.className('card'));
  }

  getUL(){
    return element(by.css('ul'));
  }

  getLI(){
    return element(by.css('li'));
  }

  getTitle(){
    return element(by.className('list-group-item mx-auto'));
  }

  getInfo(){
    return element(by.className('list-group-item'));
  }

  getMap(){
    return element(by.tagName('app-map'));
  }

  getBackButton(){
    return element(by.className('btn btn-outline-danger btn-md btn-block'));
  }

  getSaveButton(){
    return element(by.className('btn btn-outline-success  btn-md btn-block'));
  }
}
