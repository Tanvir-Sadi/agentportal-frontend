import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Application } from 'src/app/new-application/interfaces/application';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:any;
  application!: Application;
  loading: boolean=true;
  roles: any ;

  constructor(private route: ActivatedRoute, private _applicationService:ApplicationService, private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.roles = this._authService.getRoles()
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

  deleteApplication(id:any){
    if(confirm("This Application Will be deleted Permanently")){

      this._applicationService.deleteApplication(id)
      .subscribe(
        (param) => {
          this._router.navigate(['../agent/application']);        
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
}
