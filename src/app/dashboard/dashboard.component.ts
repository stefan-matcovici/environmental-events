import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { Event }        from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [EventService]

})
export class DashboardComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .then(events => this.events = events.slice(0, 5));
  }

  sortedEvents(): Event[] 
  {
    return this.events.sort((a: Event, b: Event) => {if (a.startingTime>b.startingTime) return -1; else if (a.startingTime<b.startingTime) return 1; else return 0;});
  }


}
