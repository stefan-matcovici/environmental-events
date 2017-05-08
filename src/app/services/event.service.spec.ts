import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing'
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { Event } from '../models/Event';
import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        EventService,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
      ]
    })
  });

  it('retrieves using the event ID',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({ body: JSON.stringify({data: [{id:1}, {id:2}]}) });
        c.mockRespond(new Response(response));
      });
      eventService.getEvents().then((events : Event[]) => {
        res = events;
      });
      tick();
      console.log(res);
      expect(res[0].id).toEqual(1);
    }))
  );
});

describe('getEvent', () => {
  
});

  //it('should ...', inject([EventService], (service: EventService) => {
  //  expect(service).toBeTruthy();
  //}));

  //it('Deleting a non-existing record should throw an error', inject([EventService], (service: EventService) => {
  //  expect(service.delete(-1)).toThrowError;
  //}));