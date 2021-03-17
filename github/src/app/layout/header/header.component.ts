import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import * as EventEmitter from 'node:events';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm:FormGroup;
  constructor(public authService:AuthService,private gs: GeneralService,private githubService:GithubService) { }

  onSubmit(){
    // console.log("From Child"+this.searchForm.value)
    this.githubService.getUser(this.searchForm.controls.search.value).subscribe((res)=>{})
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl("")
    })
    // this.parentFunction.emit("Lakshit Khanna")
  }

  logout(){
    this.authService.logout().subscribe(
      (res) => {
        console.log(res)
        this.gs.info("Logout Successfully.")
      },
      (err) => {
        this.gs.error("Error While Logging Out.")
      }
    )
  }

}
