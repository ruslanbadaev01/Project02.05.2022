import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService, IComment } from '../service/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  
  @Input() id: number
  
  commentList: Observable<IComment[]>;

  constructor(private commentService: CommentService) {}
  

  ngOnInit(): void {
    this.commentList = this.commentService.getComment(this.id);
   }

}
