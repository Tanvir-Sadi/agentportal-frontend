import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  public error: any;
  togglePassword: any = "password"
  openEye: boolean = true

  constructor(private _authService:AuthService, private fb:FormBuilder, private router:Router) { }
  // Agent Register
  user = this.fb.group({
    email:[''],
    password:[''],
  });
  


  ngOnInit(): void {
  }

  onLogin(){
    this._authService.login(this.user.value)
    .subscribe(
      (response)=>{
        localStorage.setItem('token', response.token)
        localStorage.setItem('name', response.name)
        localStorage.setItem('roles', response.roles)
        this.redirect()
      },
      (error)=>{                 
        alert("Something went wrong. Please check your Email and password carefully!");
      }, 
    )
  }

  redirect(){
    if (this._authService.getRoles()=='agent') {
      this.router.navigate(['../agent/new-application']);
    } else {
      this.router.navigate(['../admin/application']);
    }
  }


  togglePasswordFunction(){
    this.openEye = !this.openEye; 
    if(this.openEye){
      this.togglePassword = "password"
    }else{
      this.togglePassword = "text"
    }
  }
}
