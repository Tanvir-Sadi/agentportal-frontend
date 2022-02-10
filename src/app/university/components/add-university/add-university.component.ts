import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  hiddenAddUniversity:boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddUniversity(){
    this.hiddenAddUniversity = !this.hiddenAddUniversity; 
  }
}
