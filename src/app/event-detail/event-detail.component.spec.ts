import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NguiMapModule } from '@ngui/map';
import { MapComponent } from '../map/map.component'
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailComponent, MapComponent],
      imports: [FormsModule, NguiMapModule, HttpModule,RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should have a defined component', () => {
    let nav = fixture.nativeElement;
    let list = nav.querySelectorAll('.list-group-item');

    for (var i = 0; i < list.length; i++) {
      console.log(list[i].style.backgroundColor);
      expect(list[i].style.backgroundColor).toBe("black");
    }
  });
});
