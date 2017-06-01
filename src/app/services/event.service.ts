import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from '../models/events/event';
import {Fire} from '../models/events/fire';

@Injectable()
export class EventService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private eventsUrl = 'http://localhost:8080/v1/events';  // URL to web api
  private typesUrl = 'http://localhost:8080/v1/eventMappings';  // URL to event type

  constructor(private http: Http) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => {
                  let list = new Array<Event>();
                  if (response.json())
                  {
                    for (let element of response.json())
                    {
                      let jsonObject = element;
                      let event = this.toEvent(jsonObject);
                      this.http.get(`${this.typesUrl}/${jsonObject.id}`).toPromise().then(response => response.json().eventType as string).then(eventType => event.type = eventType);
                      list.push(event);
                    }
                  }              
                  return list;
                })
               .catch(this.handleError);
  }


  getEvent(id: number): Promise<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(event,type): Promise<any> {
    console.log(type);
    return this.http.post(`${this.eventsUrl}/${type}`,event,{headers: this.headers}).toPromise().then(res => res.json().data as Event)
      .catch(this.handleError);

    // return this.http
    //   .post(this.eventsUrl, JSON.stringify({name: name}), {headers: this.headers})
    //   .toPromise()
    //   .then(res => res.json().data as Event)
    //   .catch(this.handleError);
  }

  update(event,type): Promise<any> {
    var localtype = type.toLowerCase();
    console.log(localtype);
    const url = this.eventsUrl+`/${localtype}/${event.id}`;
    return this.http
      .put(url, JSON.stringify(event), {headers: this.headers})
      .toPromise()
      .then(() => event)
      .catch(this.handleError);
  }

  getFullEvent(id:number,type:string): Promise<any> {
    const url = `${this.eventsUrl}/${type}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(event => event.json())
      .catch(this.handleError);
  }

  private toEvent(json: any): Event{
    let e = new Event();
    e.name = json.name;
    e.description = json.description;
    e.endingDate = new Date(json.endingDate * 1000);
    e.startingDate = new Date(json.startingDate * 1000)
    e.hints = json.hints;
    e.id = json.id;
    e.latitude = json.latitude;
    e.longitude = json.longitude;
    e.severity = json.severity;
    e.radius = json.radius;
    e.userId = json.userId;
    
    return e;
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    console.error('An error occured', error);
    //return Promise.reject(error.message || error);
    return Promise.reject(new Error('fail'));
  }
}