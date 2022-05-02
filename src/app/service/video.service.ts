import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { VIDEOS } from '../Videos'; 

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
    return of(VIDEOS)
  }

}
