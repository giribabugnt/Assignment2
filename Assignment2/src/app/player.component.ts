import { Component, OnInit } from '@angular/core';

declare function init(): any;
@Component({
    selector: 'player-component',
    templateUrl: './player.component.html'
    
  })
export class PlayerComponent implements OnInit{
  
  ngOnInit() {
   init();
  }

}