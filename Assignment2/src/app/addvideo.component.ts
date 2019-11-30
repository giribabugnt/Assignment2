import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayItem } from './playItem';
import { PlayItemService } from './services/playItem.service';

@Component({
  selector: 'addvideo-root',
  templateUrl: './addvideo.component.html'
  
})
export class AddVideoComponent implements OnInit{


  
  constructor(private playItemService:PlayItemService){

  }

  ngOnInit(){
  
    this.playItemService.findAllPlayList().then((res:Array<PlayItem>)=> {
      this.playItems = res
   })
  }
 
  playItems: Array<PlayItem> = [];
  urlError:String;
  titleError:String;
    
  public onAddVideo(addVideo:any){
           
    let body = {id:0,title:addVideo.title, url:addVideo.url,status:'added',approved:0,likes:0,unlike:0}

    this.playItemService.addVideo(body).then( (res:any)=> {
      this.findAllPlayList();
    })
   
    alert('Successfully added');
  }

  public approveVideo(playItem:PlayItem){
    
    playItem.approved=1;
  
    this.playItemService.editVideo(playItem).then( (res:any)=> {
      this.findAllPlayList();

      this.playItemService.videoApproved(1);
      
    })
 
    this.playItemService.videoApproved(1);
   
  }
  public editVideo(playItem:PlayItem){
    alert(playItem.url);
    //this.playItemService.addVideo(playItem);
  }

  public deleteVideo(id:number){
    
    this.playItemService.deleteVideo(id).then( (res:any)=> {
      this.findAllPlayList();
      this.playItemService.videoApproved(1);
    })
    
  }

  public findAllPlayList(){

    this.playItemService.findAllPlayList().then((res:Array<PlayItem>)=> {
           
      this.playItems = res;
     
    })
   }
  
}
