import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  hiddenAddUniversity:boolean = false; 
  constructor(private fb:FormBuilder, private _universityService:UniversityService) { }

  university = this.fb.group({
    name:[''],
    address:[''],
    link:[''],
    tuitionfees:['']
  });

  ngOnInit(): void {
  }

  toggleAddUniversity(){
    this.hiddenAddUniversity = !this.hiddenAddUniversity; 
  }

  onSubmit(){
    this.addUniversity()
  }

  addUniversity(){
    this._universityService.addUniversity(this.university.value)
    .subscribe(
      (data)=>{
        console.log(data)
        this.toggleAddUniversity()
        this.university.reset()
      }
    )
  }
}
