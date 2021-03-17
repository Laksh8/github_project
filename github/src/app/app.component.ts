import { Component } from '@angular/core';
import { of } from 'rxjs';
import { GithubService } from './services/github.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  userName = ""
  


  constructor( private githubService:GithubService ){
  }



  // appendValue(val){
  //   this.arr.pipe(

  //   )
  // }

  parentFunction(data){
    console.log("From Parent",data)
    this.userName = data.search;
  }

}
