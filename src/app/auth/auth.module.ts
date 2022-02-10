import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AgentRegistrationComponent } from './pages/agent-registration/agent-registration.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AgentLoginComponent } from './pages/agent-login/agent-login.component';

@NgModule({
  declarations: [
    AuthComponent,
    AgentRegistrationComponent,
    AgentLoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
