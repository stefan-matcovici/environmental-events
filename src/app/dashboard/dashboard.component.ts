import { Component, OnInit } from '@angular/core';

import { Event }        from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .then(events => this.events = events.slice(0, 5));
  }
}
