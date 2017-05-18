import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [
        RouterTestingModule,
        HttpModule
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a defined component', () => {
    component.events = [{id: 11, name: 'Fire',startingTime: new Date('May 20, 2017 12:26:00'),endingTime: new Date('May 23, 2017 12:26:00'),severity: 'GREEN',description:'Very dangerous',hints:'Stay in your house please!',location:{latitude:39.904211,longitude:116.407395},radius:2}];
    
    let nav = fixture.nativeElement;
    let list = nav.querySelectorAll('.events');

    for (var i = 0; i < list.length; i++) {
      console.log(list[i].style.backgroundColor);
      expect(list[i].style.backgroundColor).toBe("#e6eb10");
    }
  });


});
