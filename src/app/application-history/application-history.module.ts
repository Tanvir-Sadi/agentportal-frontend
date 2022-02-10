import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationHistoryRoutingModule } from './application-history-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ApplicationFilterComponent } from './components/application-filter/application-filter.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationHistoryComponent } from './pages/application-history/application-history.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { MessegeDetailsComponent } from './components/messege-details/messege-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationDocumentListsComponent } from './components/application-document-lists/application-document-lists.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationHistoryComponent,
    OverviewComponent,
    ApplicationFilterComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent,
    StudentDetailsComponent,
    CourseDetailsComponent,
    DocumentDetailsComponent,
    MessegeDetailsComponent,
    ApplicationDocumentListsComponent,
    ApplicationStatusComponent,
    TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    ApplicationHistoryRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    ApplicationFilterComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent,
    StudentDetailsComponent,
    CourseDetailsComponent,
    DocumentDetailsComponent,
    MessegeDetailsComponent,
    ApplicationDocumentListsComponent,
    ApplicationStatusComponent,
  ]
})
export class ApplicationHistoryModule { }
