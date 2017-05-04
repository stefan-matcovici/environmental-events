import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));

  it('Deleting a non-existing record should throw an error', inject([EventService], (service: EventService) => {
      expect(service.delete(-1)).toThrowError;
    }));

    



});
