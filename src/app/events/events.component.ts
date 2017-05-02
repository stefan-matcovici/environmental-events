import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Event }                from '../models/event';
import { EventService }         from '../services/event.service';

@Component({
  selector: 'my-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.css' ],
  providers: [EventService]
})
export class EventsComponent implements OnInit {
  events: Event[];
  selectedevent: Event;

  constructor(
    private eventService: EventService,
    private router: Router) { }

  getevents(): void {
    this.eventService
        .getEvents()
        .then(events => this.events = events);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.eventService.create(name)
      .then(event => {
        this.events.push(event);
        this.selectedevent = null;
      });
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedevent.id]);
  }
}
