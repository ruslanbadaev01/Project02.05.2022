import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface IVideo{
  url: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  videoList$: Observable<IVideo[]> = this.getVideos();
  private _videoList: IVideo[];
  constructor() { 
    this.videoList$.subscribe(list => {
      this._videoList = list;
    })
  }


  getVideoById(id: number) {
    return this._videoList.find(video => video.id === id);
  }



  getVideos() {
    return of([{url:'/assets/video.mp4',id:1},{url:'/assets/Cat.mp4',id:2},{url:'/assets/Black.mp4',id:3},{url:'/assets/vv.mp4',id:4}])
  }

}
