import { Component, Input, OnInit } from '@angular/core';
import { RegisteredUser } from 'src/app/Interfaces/registeredUsers.type';
import {Events} from '../../Interfaces/events.type'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() event: Events = {};
  getDate: string="";
  getRegisteredUsers: RegisteredUser={}
  tagCount: number = 0;
  startDate: string="";


  constructor(){

    }

    ngOnInit(): void {
      if(this.event.short_desc!=undefined && this.event.short_desc.length>300) {
        this.event.short_desc = this.event.short_desc.substring(0,300)+ "...";
      }
      // formatting the date
      if(this.event.event_start_time){
        let temp_date = new Date(this.event.event_start_time*1000).toLocaleString();
        let get_date= new Date(this.event.event_start_time*1000).toUTCString();
        get_date = get_date.substring(4,get_date.length-13);
        // console.log(get_date);
        let t=temp_date.split(",")[1].split(" ")[1].split(":") ;
        t.pop();
        let temp_time= t.join(":") + " "+ temp_date.split(",")[1].split(" ")[2];
        // console.log(temp_time);
        this.startDate= temp_time + "," + get_date;
        // console.log(this.startDate);
      }


      if(this.event.registered_users){
        this.getRegisteredUsers= this.event.registered_users;
      }
      if(this.event.card_tags){
        this.tagCount= this.event.card_tags.length;
      }
    }

}
