import { Component, OnInit,Input, EventEmitter, Output  } from '@angular/core';
import {Event} from '../models/events/event'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  @Input() event: Event;
  @Input() editable: boolean;
  @Input() radius: number;
  @Output() positionChanged = new EventEmitter<any>();
  position: google.maps.LatLng;

  constructor() {}

  ngOnInit() {
  }

  onClick(event) {
    if (event instanceof MouseEvent)
        return;
    this.position = event.latLng;
    this.positionChanged.emit(this.position);
    event.target.panTo(event.latLng);
  }


  
}
