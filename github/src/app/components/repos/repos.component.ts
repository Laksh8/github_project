import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos:any ;
  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.repos.subscribe(
      (res) => {
        if(!res) {
          return;
        }
        console.log(res)
        this.repos = res
      }
    )
  }

}
