import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player.component';
import { ControlerComponent } from './controler.component';
import { PlaylistComponent } from './playlist.component';
import { PlayItemService } from './services/playItem.service';
import { HttpClientModule } from '@angular/common/http';
import { AddVideoComponent } from './addvideo.component';
import { VideoPlayerComponent } from './videoplayer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ControlerComponent,
    PlaylistComponent ,
    AddVideoComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [PlayItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
