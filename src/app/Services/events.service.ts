import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Events} from '../Interfaces/events.type'
const API = "https://api.codingninjas.com/api/v3/events"
const API1 = "https://api.codingninjas.com/api/v3/event_tags";
@Injectable(
  {
    providedIn: 'root',
  }
)
export class EventsService {
  constructor(private http: HttpClient) { }

  async getEvents(eventCategory: string, eventSubcategory: string, tagList: string[], offset: number){
    let params = `?event_category=${eventCategory}&event_sub_category=${eventSubcategory}&tag_list=`;
    for(let i=0;i<tagList.length;i++){
        if(i==tagList.length-1) params+=`${tagList[i]}`;
        else params+=`${tagList[i]},`
    }
    params+=`&offset=${offset}`;

    return await this.http.get(API+params);

  }
  async getEventsTag()
  {
      return await this.http.get(API1)
  }
}

