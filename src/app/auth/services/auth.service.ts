import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.api_url;
  user!: User;
  constructor(private _http:HttpClient, private _router:Router) { }
  
  // Register as an Agent
  agentRegister(user:User){
    this.user = user;
    this.user.roles = "agent";
    return this._http.post<User>(`${this.API_URL}/register`, user)
  }

  // User Login
  login(user:User){
    this.user = user;
    return this._http.post<User>(`${this.API_URL}/login`, user)
  }
  
  // token for Authorization
  getToken() {
    return localStorage.getItem('token')
  }

  getRoles(){
    return localStorage.getItem('roles')
  }

  getStatus(){
    return localStorage.getItem('status')
  }

  getName(){
    return localStorage.getItem('name')
  }

  isLoggedin():boolean{
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('roles')
    localStorage.removeItem('status')
    localStorage.removeItem('name')
    this._router.navigate(['/auth/login'])
  }
}
