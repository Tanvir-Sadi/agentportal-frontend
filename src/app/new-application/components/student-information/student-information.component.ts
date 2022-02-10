import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  constructor(private _applicationService:ApplicationService, private fb:FormBuilder, private router:Router) { }

  student_information = this.fb.group({
    student_name:[''],
    student_email:[''],
    student_dob:[''],
    visa_refusal:[''],
    nationality:[''],
    student_number:[''],
    passport_number:[''],
    passport_expire_date:[''],
  });

  ngOnInit(): void {
    if(this._applicationService.getStudentInformation()){
      this.student_information.setValue(this._applicationService.getStudentInformation());
    }
    this.student_information.statusChanges.subscribe(
      data=>{
        if(data == "VALID"){
          this._applicationService.setStudentInformation(this.student_information.value);
        }
      }
    )
  }

  onSubmit(){ 
    if(confirm("You want to continue?")){
      this._applicationService.addNewApplication()
      .subscribe(
        (response)=>{
          alert("Your Application is Registered Successfully!");
          this.router.navigate(['../agent/application', response.id], {fragment: 'document'});
        },
        error=>{ 
          alert("Something went Wrong!")
          console.error(error);
        }, 
      )
    }
  }
}
