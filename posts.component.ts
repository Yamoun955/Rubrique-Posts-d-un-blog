import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() myTitle: string;
  @Input() myContent: string;
  loveIts=0;
  @Input() createdAt: Date;
  constructor() { }

  ngOnInit() {
  }


}
