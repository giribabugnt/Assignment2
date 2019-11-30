import { Component,OnInit, EventEmitter,Input, Output } from '@angular/core';
import { PlayItem } from './playItem';


@Component({
    selector: 'controler-player',
    templateUrl: './controler.component.html'
    
  })
  
export class ControlerComponent {

  @Input() playItem: PlayItem ;
 
  @Output() likeClicked = new EventEmitter<PlayItem>();
  @Output() unlikeClicked = new EventEmitter<PlayItem>();

  addLike(playItem:PlayItem){
   this.likeClicked.emit(playItem);
  }

  addUnLike(playItem:PlayItem){
    this.unlikeClicked.emit(playItem);
   }
}