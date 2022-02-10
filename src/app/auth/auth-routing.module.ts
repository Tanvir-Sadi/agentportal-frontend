import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AgentLoginComponent } from './pages/agent-login/agent-login.component';
import { AgentRegistrationComponent } from './pages/agent-registration/agent-registration.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent 
  },
  {
    path: 'login',
    component: AgentLoginComponent
  },
  {
    path: 'register',
    component: AgentRegistrationComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
