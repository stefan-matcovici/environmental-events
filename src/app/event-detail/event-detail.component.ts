import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../models/events/event';
import { EventService } from '../services/event.service';
import { MapComponent } from '../map/map.component';
import {Fire} from '../models/events/fire';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  event;
  type:string;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
      {
        this.type = params['type'];
        return this.eventService.getFullEvent(params['id'],params['type'].toLowerCase());
      })
      .subscribe(event => {console.log(event);this.event=event;});
  }

   save(): void {
     this.eventService.update(this.event)
       .then(() => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }
}
