import { Component, OnInit,Input  } from '@angular/core';
import { NguiMapComponent } from '@ngui/map';
import {Event} from '../models/event'

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

  position:[1,2];
  radius:2000;

  

}
