import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from '../endpoints/endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = null;
  constructor(private http:HttpClient) { }

  checkAuth(){
    return Boolean(localStorage.getItem("access_token"));
  }

  login(payload){
    this.isLoggedin = true
    return this.http.post(endpoint.login,payload)
  }

  signup(payload){
    return this.http.post(endpoint.register,payload);
  }

  tokenRefresh(payload){
    return this.http.post(endpoint.refresh_token,payload);
  }
  
  logout(){
    let data = {
      refresh_token:localStorage.getItem("refresh_token")
    }
    localStorage.clear();
    return this.http.post(endpoint.logout,data);
  }

}
