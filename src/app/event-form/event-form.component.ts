import { MapComponent } from '../map/map.component'
import { EventService } from '../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event:any = {};
  type:string;
  buildTool;

  name:string;
  startingDate:Date;
  endingDate:Date;
  description:string;
  hints:string;
  radius:number;
  severity:string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event.radius=0;
  }

  onPositionChanged($event)
  {
    console.log($event);
    this.event.latitude = $event.lat();
    this.event.longitude = $event.lng();
  }

  create()
  {
    this.eventService.create(this.event,this.type);
    window.location.reload();
  }

  changeType(str)
  {
    this.type=str;
    this.event.name=this.name;
    this.event.startingDate=this.startingDate;
    this.event.endingDate=this.startingDate;
    this.event.description=this.description;
    this.event.hints=this.hints;
    this.event.radius=this.radius;
    this.event.severity=this.severity;
  }

}
