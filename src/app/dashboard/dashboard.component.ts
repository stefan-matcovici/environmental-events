import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Event } from '../models/events/event';
import { EventService } from '../services/event.service';

import { Location } from '@angular/common';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [EventService]

})


export class DashboardComponent implements OnInit {

  events: Event[] = [];
  selectedEvent: Event;
  lat:number;

  constructor(private eventService: EventService,private location: Location) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .then(events => this.events = events.slice(0, 5));
  }

  sortedEvents(): Event[] {
    return this.events.sort((a: Event, b: Event) => { if (a.startingTime > b.startingTime) return -1; else if (a.startingTime < b.startingTime) return 1; else return 0; });
  }

  details(_a,event) {

    this.location.go("/detail/"+ event.id,"");
    window.location.reload();
  }

}
