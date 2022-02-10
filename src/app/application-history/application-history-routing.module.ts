import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';
import { ApplicationHistoryComponent } from './pages/application-history/application-history.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: ApplicationHistoryComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: ':id',
    component: ApplicationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationHistoryRoutingModule { }
