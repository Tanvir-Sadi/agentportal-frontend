import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './pages/agent/agent.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';
import { NewAgentComponent } from './components/new-agent/new-agent.component';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [
    AgentComponent,
    AgentListComponent,
    NewAgentComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
