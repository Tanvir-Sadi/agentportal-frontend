import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgentSidebarComponent } from './agent-sidebar/agent-sidebar.component';
import { AgentNavbarComponent } from './agent-navbar/agent-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    AgentSidebarComponent,
    AgentNavbarComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponent,
    NavbarComponent,
    AgentSidebarComponent,
    AgentNavbarComponent,
    AdminSidebarComponent
  ]
})
export class SharedModule { }
