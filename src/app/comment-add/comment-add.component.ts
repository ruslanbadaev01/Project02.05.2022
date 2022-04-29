import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';



@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {

  @Input() 
  id: number;
  text: string = '';


  constructor(private commentService: CommentService) { }

  setComment(){
    this.commentService.addComment({text: this.text, videoId: this.id});
    this.text = '';
  }

  ngOnInit() {
  }

}
