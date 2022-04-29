import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from '../service/video.service';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: IVideo;
  constructor() { }


  
  ngOnInit(): void {
  }

}
