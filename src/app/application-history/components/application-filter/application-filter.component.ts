import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-application-filter',
  templateUrl: './application-filter.component.html',
  styleUrls: ['./application-filter.component.css']
})
export class ApplicationFilterComponent implements OnInit {
  URL: any;
  roles:any

  constructor(private fb:FormBuilder, private _applicationService:ApplicationService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.roles = this._authService.getRoles()
  }

  applicationFilter=this.fb.group({
    application_id:[''],
    student_name:[''],
    course_name:[''],
    course_intake:[''],
    course_level:[''],
    university_name:[''],
    user_name:[''],
  })

  getApplicationData(){
    let params = new HttpParams();
    params = params.set(`filter[application_id]`,this.applicationFilter.controls['application_id'].value)
    params = params.set(`filter[student_name]`,this.applicationFilter.controls['student_name'].value)
    params = params.set(`filter[course_name]`,this.applicationFilter.controls['course_name'].value)
    params = params.set(`filter[course_intake]`,this.applicationFilter.controls['course_intake'].value)
    params = params.set(`filter[course_level]`,this.applicationFilter.controls['course_level'].value)
    params = params.set(`filter[university_name]`,this.applicationFilter.controls['university_name'].value) 
    if (this.roles=='admin') {
      params = params.set(`filter[user.name]`,this.applicationFilter.controls['user_name'].value)    
    }   
    // console.log(params);
    
    this._applicationService.getApplicationFilter(params)
  }
}
