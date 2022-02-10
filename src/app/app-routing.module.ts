import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AgentLayoutComponent } from './layout/agent-layout/agent-layout.component';
import { CmsLayoutComponent } from './layout/cms-layout/cms-layout.component';

const routes: Routes = [
  { 
    path: '',
    component: CmsLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule) 
      },
      { 
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
      },
    ] 
  },
  {
    path: 'agent',
    component: AgentLayoutComponent, 
    children:[
      {
        path: 'profile',
        loadChildren: () => import('./agent-profile/agent-profile.module').then(m => m.AgentProfileModule) 
      },
      { 
        path: 'new-application',
        loadChildren: () => import('./new-application/new-application.module').then(m => m.NewApplicationModule) 
      }, 
      { 
        path: 'application', 
        loadChildren: () => import('./application-history/application-history.module').then(m => m.ApplicationHistoryModule) 
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      { 
        path: 'university', 
        loadChildren: () => import('./university/university.module').then(m => m.UniversityModule) 
      }, 
      { 
        path: 'course', 
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule) 
      },
      { 
        path: 'application', 
        loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) 
      },
      { 
        path: 'agent', 
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) 
      },
      {
        path: '',
        redirectTo: 'agent',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'oops'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
