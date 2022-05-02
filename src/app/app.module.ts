import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { CardPageComponent } from './card-page/card-page.component';
import { VideoListComponent } from './video-list/video-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    VideoCardComponent,
    CardPageComponent,
    VideoListComponent,
    CommentListComponent,
    CommentAddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
