import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Message } from 'src/app/new-application/interfaces/message';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-messege-details',
  templateUrl: './messege-details.component.html',
  styleUrls: ['./messege-details.component.css']
})
export class MessegeDetailsComponent implements OnInit {
  id: any
  messageList:Message[] = []
  roles: any = 'agent';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private _authService:AuthService, private _applicationService:ApplicationService) { }
  
  messages = this.fb.group({
    message: [''],
    type:[''],
    user:this._authService.getName()
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.roles = this._authService.getRoles()    
    this.messagelist()
  }

  
  messagelist(){
    this._applicationService.getMessages(this.id).subscribe(
      (param)=>{
        this.messageList = param;
      },
      (error)=>{
        alert("Something went wrong while fetching Messages!")
      }
    )
  }
  

  addmessage(){
    if (this.messages.status == 'VALID') {
      this._applicationService.addMessage(this.messages.value, this.id).subscribe(
        (param)=>{
          this.messagelist()
        },
        (error)=>{
        }
      )        
    } else {
      alert("Please fill out all the field!")
    }
  }

}
