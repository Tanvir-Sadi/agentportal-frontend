import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {
  agents: any;
  link: any;
  meta: any;
  private _authService: any;

  constructor(private _agentService:AgentService) { }

  ngOnInit(): void {
    this.getRegisteredAgents()
  }

  getRegisteredAgents(){
    this._agentService.getAgentRequests()
      .subscribe(
        (param) => {
          this.agents = param.data;
          this.link = param.links;
          this.meta = param.meta;
        },
        err => {          
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._authService.logout()
            }
          }
        }
      )
  }


  paginateAgent(link: any){
    this._agentService.getAgentPaginate(link)
      .subscribe(
        (param) => {
          this.agents = param.data;
          this.link = param.links;
          this.meta = param.meta;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._authService.logout()
            }
          }
        }
      )
  }

  updateStatus(id:any){
    this._agentService.verifyAgent(id)
    .subscribe(
      (response)=>{
        alert("Agent is Verified!");
      this.getRegisteredAgents()
      },
      error=>{ 
        alert("Something went Wrong!")
        console.error(error);
      }, 
    )
  }
  deleteAccount(id:any){
    this._agentService.deleteAgent(id)
    .subscribe(
      (response)=>{
        alert("Agent Account is deleted!");
      this.getRegisteredAgents()
      },
      error=>{ 
        alert("Something went Wrong!")
      }, 
    )
  }
}
