import { Component, OnInit,Input  } from '@angular/core';
import { NguiMapComponent } from '@ngui/map';
import {Event} from '../models/event'
import {Route, RouterModule} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() event: Event;

  showInfoWindow(e)
  {
    this.event.location.latitude = e.latLng.lat();
    this.event.location.longitude = e.latLng.lng();
  }
  
}
