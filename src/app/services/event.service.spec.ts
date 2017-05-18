import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing'
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { Event } from '../models/events/event';
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

  it('retrieves all events',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({ body: JSON.stringify({data: [{id:1}, {id:2}]})});
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

  it('error when retrieving events',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      console.error = function(message) {
      expect(message).toEqual('An error ocurred')    };
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({ body: JSON.stringify({data:{}}), status: 404});
        c.mockRespond(new Response(response));
      });
      res = eventService.getEvents();
      tick();
    }))
  );

  it('retrieve event using ID',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events/1');
        let response = new ResponseOptions({body: JSON.stringify({data: {id:1}})});
        c.mockRespond(new Response(response));
      });
      eventService.getEvent(1).then((event : Event) => {
        res = event;
      });
      tick();
      expect(res.id).toEqual(1);
    }))
  );

  it('error when retrieving event using ID',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      console.error = function(message) {
      expect(message).toEqual('An error ocurred')    };
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events/undefined');
        let response = new ResponseOptions({ body: JSON.stringify({data:{}}), status: 404});
        c.mockRespond(new Response(response));
      });
      res = eventService.getEvent();
      tick();
    }))
  );

  it('delete event using ID',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events/3');
      });
        eventService.delete(3);
        tick();
      })
    ));

  it('error when deleting event using ID',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      console.error = function(message) {
      expect(message).toEqual('An error ocurred')    };
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events/undefined');
      });
        eventService.delete();
        tick();
      })
    ));

  it('create event using name',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({body: JSON.stringify({data: {id:1}})});
        c.mockRespond(new Response(response));
      });
      eventService.create('Fire').then((event : Event) => {
        res = event;
      });
      tick();
      expect(res.id).toEqual(1);
    })));

  it('error when creating event using name',
    inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
    ) => {
      var res;
      console.error = function(message) {
      expect(message).toEqual('An error ocurred')    };
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({body: JSON.stringify({data: {}}), status:404});
        c.mockRespond(new Response(response));
      });
      eventService.create('Fire');
      tick();
    })));

    it('update event using id',
      inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
      ) => {
      var res;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({body: JSON.stringify({data: {id:1}})});
        c.mockRespond.update('Fire').then((event : Event) => {
          res = event;
        });
        tick();
        expect(res.id).toEqual(1);
      })
    })));

    it('error when updating event using id',
      inject([EventService, MockBackend], fakeAsync((eventService, mockBackend
      ) => {
      var res;
      console.error = function(message) {
      expect(message).toEqual('An error ocurred')    };
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('api/events');
        let response = new ResponseOptions({body: JSON.stringify({data: {}}), status:404});
        c.mockRespond.update().then((event : Event) => {
          res = event;
        });
        tick();
        expect(res.id).toEqual(undefined);
      })
    })));
});
