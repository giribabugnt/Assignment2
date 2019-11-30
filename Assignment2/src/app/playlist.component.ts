import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlayItemService } from './services/playItem.service';
import { PlayItem } from './playItem';
import { Subscription }   from 'rxjs';

declare function run(link): any;
@Component({
    selector: 'playlist-component',
    templateUrl: './playlist.component.html'
    
  })

export class PlaylistComponent{

  @Input() playItems: Array<PlayItem> = [];
  @Output() clickedOnPlaylist = new EventEmitter<number>();
  subscription: Subscription;

        public run1(playItem:PlayItem){
           // alert(link);
          
          run(playItem.url);
          this.clickedOnPlaylist.emit(playItem.id);
        }

      constructor(private playItemService:PlayItemService){
        this.subscription = playItemService.videoApproved$ .subscribe(
          videoApproved => {
            this.playItemService.findAllPlayList().then((res:Array<PlayItem>)=> {
           
              this.playItems = res;
             
            })
        });
      }
}