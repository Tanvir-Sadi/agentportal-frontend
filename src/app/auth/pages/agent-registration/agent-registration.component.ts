import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {
  public error: any;
  togglePassword: any = "password"
  openEye: boolean = true
  constructor(private _authService:AuthService, private fb:FormBuilder, private router:Router) { }
  // Agent Register
  agent = this.fb.group({
    name:[''],
    email:[''],
    password:[''],
    password_confirmation:[''],
    phone:['']
  });


  togglePasswordFunction(){
    this.openEye = !this.openEye; 
    if(this.openEye){
      this.togglePassword = "password"
    }else{
      this.togglePassword = "text"
    }
  }
  onRegister(){
    this._authService.agentRegister(this.agent.value)
    .subscribe(
      (response)=>{
        localStorage.setItem('token', response.token)
        localStorage.setItem('name', response.name)
        localStorage.setItem('roles', response.roles)
        this.router.navigate(['../agent/new-application']);
      },
      error=>{ 
        this.error = error;
      }, 
    )
  }

  ngOnInit(): void {
  }


}
