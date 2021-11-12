import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient){}

  private baseUrl: string = 'http://localhost:8080';
  private eventsUrl: string = this.baseUrl + '/api/v1/events/';



  /* GET all events */
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.eventsUrl);
  }

  /* POST create event*/
  createEvent(body: EventRequest): Observable<Event>{
    let httpOption = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post<Event>(this.eventsUrl, body, httpOption);
  }

}

export class EventRequest {
  id: string;
  title: string;
  date: string;

  constructor(id: string, title: string, date: string){
    this.id = id;
    this.title = title;
    this.date = date;
  }
}

export interface Event {
  id: string;
  title: string;
  date: string;
}