import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './pages/university/university.component';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { AddUniversityComponent } from './components/add-university/add-university.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversityComponent,
    UniversityListComponent,
    AddUniversityComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UniversityModule { }
