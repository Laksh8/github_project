import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  userInfo:any;
  
  constructor(private githubService:GithubService) {}

  ngOnInit(): void {
    this.githubService.usersdata.subscribe(
      (res) => {
        if(!res){
          return 
        }
        console.log(res)
        this.userInfo = res
      }
    )
  }

}
