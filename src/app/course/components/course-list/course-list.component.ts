import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  loading: boolean = true;
  CourseList: any;
  link: any;
  meta: any;

  constructor(private _courseService:CourseService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    this._courseService.getCourses(0).subscribe(
      data=>{
        if (data.body) {
          console.log(data.body);
          this.loading = false;
          this.CourseList = data.body.data;
          this.link = data.body.links;
          this.meta = data.body.meta;
        }
      }
    )
  }

  paginateCourse(link: any){
    console.log(link);
    this._courseService.getCoursePaginate(link)
      .subscribe(
        (param) => {
          this.CourseList = param.data;
          this.link = param.links;
          this.meta = param.meta;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._authService.logout()
            }
          }
        }
      )
  }

  deleteUniversity(id:any){
    if (confirm("Are you Sure?")) {
    } else {
    }
  }
}

