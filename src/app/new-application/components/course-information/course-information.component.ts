import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CourseService } from 'src/app/course/services/course.service';
import { UniversityService } from 'src/app/university/services/university.service';
import { ApplicationService } from '../../services/application.service';
import { IntakeService } from '../../services/intake.service';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {
  focusList: any;
  universityNames: any;
  university: any;
  loading:boolean = false

  courseIntakes: any;
  tempcourseIntakes: any;

  courseLevels: any;
  tempcourselevels: any;

  course: any;
  tempcourse: any;

  constructor(
    private _applicationService:ApplicationService, 
    private _universityService:UniversityService,
    private _intakeService:IntakeService,
    private _levelService:LevelService,
    private _courseService:CourseService,
    private fb:FormBuilder, 
    ){}
  
  course_information = this.fb.group({
    university_name:[''],
    course_level:[''],
    course_intake:[''],
    course_name:[''],
  });
  
  ngOnInit(): void {
    this.getUniversityName()
    this.formValueChanges()
    if(this._applicationService.getCourseInformation()){
      this.course_information.setValue(this._applicationService.getCourseInformation());
    }

    this.course_information.statusChanges.subscribe(
      data=>{
        if(data == "VALID"){
          console.log(this.course_information.value);
          this._applicationService.setCourseInformation(this.course_information.value);
        }
      }
    )
  }

  getUniversityName(){ 
    this._universityService.getUniversities(true).subscribe(
      (data)=>{
        this.universityNames=data.body
        this.university=data.body
      }
    )
  }
  onFocus(name:any){
    this.focusList=name;
  }
  onBlur(){
    this.focusList='';
  }

  clickUniversity(universityName:any){
    console.log(universityName);
    this.course_information.controls['university_name'].setValue(universityName)
    this.onBlur()
    this.loadIntakes(universityName)
  }

  clickCourseIntake(courseIntake:any){
    this.course_information.controls['course_intake'].setValue(courseIntake)
    let university = this.course_information.controls['university_name'].value
    this.onBlur()
    this.loadLevels(university,courseIntake)
  }
  
  clickcourseLevel(courseLevel:any){
    this.course_information.controls['course_level'].setValue(courseLevel)
    this.onBlur()
    this.loadCourse(courseLevel)
  }

  clickCourse(courseName:any){
    this.course_information.controls['course_name'].setValue(courseName)
    this.onBlur()
  }
  

  loadIntakes(universityName:string){
    this.loading = true
    this._intakeService.getIntakes(universityName).subscribe(
      (data)=>{
        this.courseIntakes=data
        console.log(this.courseIntakes);
        this.tempcourseIntakes=data
        this.loading = false
      }
    )
  }

  loadLevels(university:any, courseIntake: any) {
    this.loading = true
    this._levelService.getlevels(university, courseIntake).subscribe(
      (data)=>{
        this.courseLevels=data
        console.log(this.courseLevels);
        this.tempcourselevels=data
        this.loading = false
      }
    )
  }

  loadCourse(courseLevel: any) {
    this.loading = true
    let university = this.course_information.controls['university_name'].value
    let intake = this.course_information.controls['course_intake'].value
    this._courseService.getCoursesName(university,courseLevel, intake).subscribe(
      (data)=>{
        this.course=data
        console.log(this.course);
        this.tempcourse=data
        this.loading = false
      }
    )
  }

  formValueChanges(){
    this.course_information.controls['university_name'].valueChanges.subscribe(
      (data)=>{
        this.university=this.universityNames.filter((d:any)=>d.name.toLowerCase().includes(data.toLowerCase()))
      }
    )

    this.course_information.controls['course_intake'].valueChanges.subscribe(
      (data)=>{
        this.courseIntakes=this.tempcourseIntakes.filter((d:any)=>d.name.toLowerCase().includes(data.toLowerCase()))
      }
    )
  }
}
