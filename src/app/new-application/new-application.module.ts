import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewApplicationRoutingModule } from './new-application-routing.module';
import { NewApplicationComponent } from './pages/new-application/new-application.component';
import { CourseInformationComponent } from './components/course-information/course-information.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';
import { DocumentsUploadComponent } from './components/documents-upload/documents-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ 
    NewApplicationComponent,
    CourseInformationComponent,
    StudentInformationComponent,
    DocumentsUploadComponent
  ],
  imports: [
    CommonModule,
    NewApplicationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NewApplicationModule { }
