import {Component, OnInit} from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';
import {Events} from '../../Interfaces/events.type'
import {Subscription} from 'rxjs'

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})

export class EventsComponent implements OnInit {
  events: Events[] = [];
  // eventsDataSubscription: Subscription;
  tags: string[] = [];
  event_category: string = "ALL_EVENTS";
  event_sub_category: string = "Upcoming";
  tagEvents: string[] = [];
  pageCount: number= 1;
  curPage: number= 1;
  offset: number = 0;
  mobileTags: boolean = false;
  tagColor: boolean[] = new Array(22);


  constructor(private eventsService: EventsService){

  }
  async ngOnInit(): Promise<any> {
      (await this.eventsService.getEvents(this.event_category, this.event_sub_category, this.tagEvents, this.offset)).subscribe((resp: any)=>{
        this.events=resp.data.events;
        this.pageCount= resp.data.page_count;
        // console.log(resp)
      });
      (await this.eventsService.getEventsTag()).subscribe((resp: any)=>{
        this.tags=resp.data.tags;
        // console.log(this.tags);
      })
  }
  async apiCall(){
    (await this.eventsService.getEvents(this.event_category, this.event_sub_category, this.tagEvents, this.offset)).subscribe((resp: any)=>{
      this.events=resp.data.events;
      this.pageCount= resp.data.page_count;
      // console.log(resp)
    })
  }

  getEventCategory(event_category:string){
    this.event_category=event_category;
    this.event_sub_category="Upcoming";
    this.tagEvents=[];
    this.tagColor =[];
    this.apiCall();
  }
  getEventSubCategory(event_sub_category:string){
    this.event_sub_category= event_sub_category;
    this.apiCall();
  }
  pushTag(tag:string){
    if(this.tagEvents.indexOf(tag)!=-1){
      this.tagEvents= this.tagEvents.filter(e => e !== tag);
    }
    else{
      this.tagEvents.push(tag);
    }
    // console.log(this.tagEvents)
    this.apiCall();
  }
  clearTag(temp:boolean){
    this.tagEvents=[];
    this.apiCall();
  }

  showPrevPage(){
    this.curPage--;
    this.offset-=20;
    this.apiCall();
    window.scroll({top: 0,left: 0, behavior: 'smooth'});
  }
  showNextPage(){
    this.curPage++;
    this.offset+=20;
    this.apiCall();
    window.scroll({top: 0,left: 0, behavior: 'smooth'});
  }

  showMobileTags(){
    this.mobileTags = !this.mobileTags;
    // console.log(this.mobileTags);
  }

}
