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
  map:google.maps.Map;
  color:string = '#FF0000';
  icons = [
    {
      name: 'Rain',
      icon: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-12/32/cloud-icon.png'
    },
    {
      name: 'Fog',
      icon: 'http://icons.iconarchive.com/icons/icons-land/weather/32/Fog-icon.png'
    },
    {
      name: 'Fire',
      icon: 'http://icons.iconarchive.com/icons/iconka/pioneer-camp/32/fire-icon.png'
    },
    {
      name: 'Flood',
      icon: 'https://www.iconfinder.com/data/icons/property-insurance/256/Flood_Insurance-32.png'
    },
    {
      name: 'Terrorist Attack',
      icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/32/Military-Rifle-icon.png'
    },
    {
      name: 'Tornado',
      icon: 'http://icons.iconarchive.com/icons/large-icons/large-weather/32/tornado-icon.png'
    },
    {
      name: 'Tsunami',
      icon: 'https://www.iconfinder.com/data/icons/disasters/91/tsunami_water_wave_element-32.png'
    },
    {
      name: 'MeteoEvent',
      icon: 'http://icons.iconarchive.com/icons/aha-soft/free-3d-glossy/32/Thermometer-icon.png'
    },
    {
      name: 'Earthquake',
      icon: 'http://icons.iconarchive.com/icons/icons8/windows-8/32/Weather-Earthquakes-icon.png'
    }
  ];

  constructor(private eventService: EventService,private location: Location) { }

  ngOnInit(): void {
    this.eventService.getEvents()
      .then(events => {
        this.events = events.slice(0, 8);
        console.log(this.events);
        }
    );
  }

  sortedEvents(): Event[] {
    return this.events.sort((a: Event, b: Event) => { if (a.startingDate > b.startingDate) return -1; else if (a.startingDate < b.startingDate) return 1; else return 0; });
  }

  details(_a,event) {
    this.location.go("/detail/" + event.type + "/" + event.id,"");
    window.location.reload();
  }

}
