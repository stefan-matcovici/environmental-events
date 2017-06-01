import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

import { EventService } from './services/event.service';
import { MapComponent } from './map/map.component';
import { NguiMapModule} from '@ngui/map';
import {NguiUtilsModule} from '@ngui/utils';
import { EventFormComponent } from './event-form/event-form.component';


import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBnMMHShEh8Vs2LgKovbiisUREiEisfpVo'}),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    EventDetailComponent,
    MapComponent,
    EventFormComponent,
    EventEditComponent
  ],

  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule { }
