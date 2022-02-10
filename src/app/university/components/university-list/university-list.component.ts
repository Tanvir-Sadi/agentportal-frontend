import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteUniversity(id:any){
    if (confirm("Are you Sure?")) {
    } else {
    }
  }

}
