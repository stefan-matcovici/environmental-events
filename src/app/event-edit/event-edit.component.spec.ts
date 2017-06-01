import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NguiMapModule } from '@ngui/map';
import { MapComponent } from '../map/map.component'
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { EventEditComponent } from './event-edit.component';

describe('EventDetailComponent', () => {
  let component: EventEditComponent;
  let fixture: ComponentFixture<EventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventEditComponent, MapComponent],
      imports: [FormsModule, NguiMapModule, HttpModule,RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
