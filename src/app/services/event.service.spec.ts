import {Injectable, ReflectiveInjector} from '@angular/core';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { Event } from '../models/Event';

import { EventService } from './event.service';

const EVENT_ONE = 'EventNrOne';
const EVENT_TWO = 'WillBeAlwaysTheSecond';

describe('EventService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      EventService,
    ]);
    this.eventService = this.injector.get(EventService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  //it('should ...', inject([EventService], (service: EventService) => {
  //  expect(service).toBeTruthy();
  //}));

  //it('Deleting a non-existing record should throw an error', inject([EventService], (service: EventService) => {
  //  expect(service.delete(-1)).toThrowError;
  //}));

  it('getEvents() should query current service url', () => {
    console.log(this.eventService.getEvents());
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch(/api\/events$/, 'url invalid');
  });

  it('getEvents() should return some events', fakeAsync(() => {
       let result: String[];
       this.eventService.getEvents().then((events: String[]) => result = events);
       this.lastConnection.mockRespond(new Response(new ResponseOptions({
         body: JSON.stringify({data: [EVENT_ONE, EVENT_TWO]}),
       })));
       
       tick();
       expect(result.length).toEqual(2, 'should contain given amount of events');
       expect(result[0]).toEqual(EVENT_ONE, ' EVENT_ONE should be the first hero');
       expect(result[1]).toEqual(EVENT_TWO, ' EVENT_TWO should be the second hero');
     }));
});
