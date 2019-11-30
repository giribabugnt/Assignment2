import { Component, OnInit } from '@angular/core';
import { PlayItem } from './playItem';
import { PlayItemService } from './services/playItem.service';

@Component({
  selector: 'videoplayer-root',
  templateUrl: './videoplayer.component.html'
  
})
export class VideoPlayerComponent implements OnInit{

  constructor(private playItemService:PlayItemService){

  }

  ngOnInit(){

    this.playItemService.findAllPlayList().then((res:Array<PlayItem>)=> {
      this.playItems = res
   })

   this.findAllPlayList(1);
     

      }
        
      playItem: PlayItem ;
      playItems: Array<PlayItem> = [];
  title = 'myPlayer';

 public  onPlaylistClicked (id:number){
  this.findAllPlayList(id);
  
 }


 public onLikeClicked (playItem:PlayItem){
  playItem.likes=playItem.likes+1;
   this.playItemService.editVideo(playItem).then((res:PlayItem)=> {
         
    this.playItem = res
   
  });

  
 }
 public onUnlikeClicked(playItem:PlayItem){
  playItem.unlike=playItem.unlike+1;
   this.playItemService.editVideo(playItem).then((res:PlayItem)=> {
         
    this.playItem = res
   
  });

  
  
 }

 public findAllPlayList(id:number){

  this.playItemService.findPlayListById(id).then((res:PlayItem)=> {
         
    this.playItem = res
   
  })
 }
  
  
}
