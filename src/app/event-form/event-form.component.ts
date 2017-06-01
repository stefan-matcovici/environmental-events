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

  name:string;
  startingDate:Date;
  endingDate:Date;
  description:string;
  hints:string;
  radius:number;
  severity:string;

  richterDegree:number;
  mercaliDegree:number;
  depth:number;

  speed:number;

  precipitationLevel:number;

  numberOfTerrorists:number;

  windspeed:number;

  humidity:number;
  temperature:number;

  maxWaveHeight:number;

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
    this.event.name=this.name;
    this.event.startingTime=this.startingDate;
    this.event.endingTime=this.startingDate;
    this.event.description=this.description;
    this.event.hints=this.hints;
    this.event.radius=this.radius;
    this.event.severity=this.severity;
    this.event.userId=2;
    switch(this.type)
    {
      case 'fire':
        this.event.speed=this.speed;
      break;
      case 'earthquake':
        this.event.richterDegree=this.richterDegree;
        this.event.mercaliDegree=this.mercaliDegree;
        this.event.depth=this.depth;
      break;
      case 'flood':
        this.event.precipitationLevel=this.precipitationLevel;
      break;
      case 'terroristAttack':
        this.event.numberOfTerrorists=this.numberOfTerrorists;
      break;
      case 'tornado':
        this.event.windspeed=this.windspeed;
      break;
      case 'meteoevent':
        this.event.humidity=this.humidity;
        this.event.precipitationLevel=this.precipitationLevel;
        this.event.temperature=this.temperature;
      break;
      case 'tsunami':
        this.event.maxWaveHeight=this.maxWaveHeight;
      break;
    }
    console.dir(this.event);
    this.eventService.create(this.event,this.type);
    window.location.reload();
  }

  changedValue(item)
  {
    console.log(item);
  }

  changeType()
  {
    
    console.log(this.event);
  }

}
