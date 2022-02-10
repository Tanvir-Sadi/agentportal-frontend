import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewApplicationComponent } from './pages/new-application/new-application.component';

const routes: Routes = [
  {
    path: '',
    component: NewApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewApplicationRoutingModule { }
