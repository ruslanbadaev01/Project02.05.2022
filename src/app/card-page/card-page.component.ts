import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  videoId: number;

  videoUrl: string | undefined;

  constructor(private route: ActivatedRoute, private videoService: VideoService ) {  
  
    this.videoId = +this.route.snapshot.params["id"];


  }

  ngOnInit(): void {
    
    this.videoUrl = this.videoService.getVideoById(this.videoId)?.url;
  }

}
