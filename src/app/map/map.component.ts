import { Component, OnInit,Input  } from '@angular/core';
import { NguiMapComponent } from '@ngui/map';
import {Event} from '../models/events/event'

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
  
}
