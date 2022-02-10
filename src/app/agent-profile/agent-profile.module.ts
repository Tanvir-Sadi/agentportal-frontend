import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentProfileRoutingModule } from './agent-profile-routing.module';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { DocumentsFormComponent } from './components/documents-form/documents-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DocumentFormComponent } from './components/document-form/document-form.component';
import { DocumentListComponent } from './components/document-list/document-list.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ProfileFormComponent,
    DocumentsFormComponent,
    ProfileComponent,
    DocumentFormComponent,
    DocumentListComponent
  ],
  imports: [
    CommonModule,
    AgentProfileRoutingModule
  ]
})
export class AgentProfileModule { }
