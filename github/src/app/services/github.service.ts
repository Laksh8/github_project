import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { endpoint } from '../endpoints/endpoint';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  usersdata = new BehaviorSubject(null);
  repos = new BehaviorSubject(null);
  // localvaruserdata=null
  constructor(private http:HttpClient) { 
    // this.testData.subscribe((res)=>{
    //   console.log(res)
    // })
  
    // this.usersdata.subscribe((res)=>{
    //   if(!res){
    //     return;
    //   }
    //   this.localvaruserdata=res

    // })
  }

  getUser(userName:string){
    return this.http.get(endpoint.github_url+userName)
    .pipe(map((res:any)=>{
      this.usersdata.next(res)
      this.getRepos(res.repos_url).subscribe((res)=>{
        
      })
      return res
    }))
  }

  // testData = new BehaviorSubject<any>(null)

  // updateTestDAta(data){
  //   this.testData.next(data)
  // }

  getRepos(url:string){
    return this.http.get(url).pipe(
      map(res=>{
        this.repos.next(res)
        console.log("Service File"+res);
        return res;
      })
    )
  }
}
