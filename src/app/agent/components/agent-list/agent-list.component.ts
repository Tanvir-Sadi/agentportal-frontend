import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  agents: any;
  link: any;
  meta: any;

  constructor(private _agentService:AgentService, private _authService:AuthService) { }

  ngOnInit(): void {
    this._agentService._refreshAgentsList$.subscribe(()=>{
    this.getVerifiedAgents()
    })
    this.getVerifiedAgents()
  }

  getVerifiedAgents(){
    this._agentService.getVerifiedAgents()
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

}
