import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo, VideoService } from '../service/video.service';
import { VIDEOS } from '../Videos';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  array: [] =  [];
  sum = 4;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  
  videoList: IVideo[] = [];
  
  constructor( private videoService: VideoService) { 
    this.appendItems(0, this.sum);
    for (let i = 0; i < 8; i++) {
      this.loadNewData();
    }
  }

  
  ngAfterViewInit(): void {
    document.addEventListener("scroll", () => {
      this.onScroll();
    });
}

public onScroll() {
    if (this.isCameraTouchesBottom()) {
      this.loadNewData();
    }
  }

private isCameraTouchesBottom(): boolean {
    return (document.body.offsetHeight + document.body.offsetTop <= window.scrollY + window.innerHeight + 0);
  }


  private videosLoaded: number = 0;

  public loadNewData(): void {
    if (this.videosLoaded >= VIDEOS.length) return;
  
    this.videoList = [...this.videoList, VIDEOS[this.videosLoaded]]
    this.videosLoaded++;
  }

  addItems(startIndex:number, endIndex:number, _method:string) {
    for (let i = 0; i < this.sum; ++i) {
      //@ts-ignore
      this.array[_method]([VIDEOS]);
    }
    
  }

  appendItems(startIndex:number, endIndex:number) {
    this.addItems(startIndex, endIndex, "push");
  }

  onScrollDown() {

    const start = this.sum;
    this.sum += 2;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  ngOnInit(): void {
  }

}
