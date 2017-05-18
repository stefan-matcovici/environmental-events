import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NguiMapModule } from '@ngui/map';
import { EventsComponent } from './events-list.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { MapComponent } from '../map/map.component'





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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

});
