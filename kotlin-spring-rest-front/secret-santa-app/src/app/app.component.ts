import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Event, EventRequest, EventsService } from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'secret-santa-app';

  constructor( private eventService: EventsService) {}
  
  currentEvents: Event[] = [];
  currentTitle: string = '';
  currentDate: string = '';

  eventsSearchForm: FormGroup = new FormGroup({});

  ngOnInit(){
    
    /* Events Form definition */
    this.eventsSearchForm = new FormGroup({
      title: new FormControl(''),
      date: new FormControl('')
    });

    this.getCurrentEvents();

    /*Events Form on Changes subscription  */
    this.eventsSearchForm.valueChanges.subscribe(form =>{
      this.currentTitle = form.title;
      this.currentDate = form.date;

      console.log(this.currentTitle);
      console.log(this.currentDate);
    });

  }

  /* GET all current events*/
  getCurrentEvents(){
    this.eventService.getEvents()
      .subscribe(events => this.currentEvents = events);
      console.log(this.currentEvents);
  }

  /* POST creat event */
  createEvent(){
    console.log('Simón');
    this.eventService.createEvent(new EventRequest('', this.currentTitle, this.currentDate))
      .subscribe(postResult => {
        console.log(postResult)
        this.getCurrentEvents();
      }
    );
  }

}

