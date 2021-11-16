import { Component, OnInit } from '@angular/core';
import { AwRedditService } from '../aw-reddit.service';
import { AwReddit, Child } from '../aw-reddit';
@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  RedditPosts:Child[] = [];

  constructor(private aw_redditService:AwRedditService) { }

  ngOnInit(): void {this.aw_redditService.getAll().subscribe((response: any) => {
    //console.log(response);
this.RedditPosts= response.data.children;
console.log(this.RedditPosts);

  },)
  

};

}
