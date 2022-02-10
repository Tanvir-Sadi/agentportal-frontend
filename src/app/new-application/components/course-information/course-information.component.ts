import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {

  constructor(private _applicationService:ApplicationService, private fb:FormBuilder, private router:Router) { }
  
  course_information = this.fb.group({
    university_name:[''],
    course_level:[''],
    course_intake:[''],
    course_name:[''],
    course_test:[''],
  });
  
  ngOnInit(): void {
  
    if(this._applicationService.getCourseInformation()){
      this.course_information.setValue(this._applicationService.getCourseInformation());
    }
    this.course_information.statusChanges.subscribe(
      data=>{
        if(data == "VALID"){
          this._applicationService.setCourseInformation(this.course_information.value);
        }
      }
    )
  }

  onFocus(event:any){
    console.log(event);
  }
  onBlur(){
    console.log('bye');
  }
}
