import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit{
  @Input() showMobileTags: boolean= false;
  @Output() sendTag = new EventEmitter<string>();
  @Output() clearTag = new EventEmitter<boolean>();
  @Input() tagColor: boolean[] = new Array(22);
  tags: string[] = [];
  showTag: string[] = [];

  constructor(private eventsService: EventsService){  }
  async ngOnInit(): Promise<any> {
    (await this.eventsService.getEventsTag()).subscribe((resp: any)=>{
      this.tags=resp.data.tags;
      this.showTag = this.tags.slice(0,10);
      // console.log(this.tags);
    })
  }
  showTags(){
      this.showTag = this.tags;
  }
  showLessTags(){
      this.showTag = this.tags.slice(0,10);
  }

  emitTag(tag:string){
    let index= this.tags.indexOf(tag);
    this.tagColor[index] = !this.tagColor[index];
    this.sendTag.emit(tag);
  }

  emitClearTag(){
    this.clearTag.emit(true);
    this.tagColor.fill(false);
  }
}
