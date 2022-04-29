import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';


export interface IComment {
  text: string;
  videoId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly _commentList$: BehaviorSubject<IComment[]> = new BehaviorSubject([] as IComment[]);
  
  private comments: IComment[] = [];

  commentList$: Observable<IComment[]> = this._commentList$.asObservable();

  constructor() { }

  addComment(com: IComment) {
    this.comments.push(com);
    this._commentList$.next(this.comments);
  }

  getComment(id: number) {
    return this.commentList$.pipe(map(items => items.filter(item => item.videoId === id )))
  }

}
