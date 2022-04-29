import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo, VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  
  videoList: Observable<IVideo[]> = this.videoService.videoList$;
  
  constructor( private videoService: VideoService) { }


  ngOnInit(): void {
  }

}
