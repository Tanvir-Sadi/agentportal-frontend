import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Application } from 'src/app/new-application/interfaces/application';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id:any;
  application!: Application;
  loading: boolean=true;

  constructor(private route: ActivatedRoute, private _applicationService:ApplicationService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getStudentDetails();
  }

  getStudentDetails(){
    this._applicationService.getApplication(this.id)
      .subscribe(
        (param) => {
          if (param.body) {
            this.loading = false;
            this.application = param.body;
          }
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

}
