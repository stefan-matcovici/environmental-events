import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Event }                from '../models/events/event';
import { EventService }         from '../services/event.service';

import {  EventFormComponent  } from '../event-form/event-form.component'
import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { MapComponent } from '../map/map.component';


@Component({
  selector: 'my-events',
  templateUrl: './events-list.component.html',
  styleUrls: [ './events-list.component.css' ],
  providers: [EventService]
})
export class EventsComponent implements OnInit {
  events: Event[];
  
  selectedevent: Event;
  userId:number = 3;

  constructor(
    private eventService: EventService,
    private router: Router) { }

  getevents(): void {
    this.eventService
        .getEvents()
        .then(events => this.events = events);
  }

  delete(event: Event): void {
    this.eventService
        .delete(event.id)
        .then(() => {
          this.events = this.events.filter(h => h !== event);
          if (this.selectedevent === event) { this.selectedevent = null; }
        });
  }

  ngOnInit(): void {
    this.getevents();
  }

  onSelect(event: Event): void {
    this.selectedevent = event;
  }

  edit(): void {
    this.router.navigate(['/detail/edit', this.selectedevent.id]);
  }
}
