import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'secret-santa-app';

  constructor(private http:HttpClient){}

  private baseUrl: string = 'http://localhost:8080';
  private eventsUrl: string = this.baseUrl + 'api/v1/events/';

  events: Event[] = [];

  ngOnInit(){
    this.events = [ 
      new Event("1", "Guadalupe", "12/12/2021"),
      new Event("2", "Navidad", "31/12/2021"),
      new Event("3", "Reyes Magos", "06/01/2022") 
    ];
  }
}


export class Event {
  id: string;
  title: string;
  date: string;

  constructor(id: string, title: string, date: string){
    this.id = id;
    this.title = title;
    this.date = date;
  }
}