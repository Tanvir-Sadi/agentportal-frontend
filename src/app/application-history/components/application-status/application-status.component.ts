import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  applicationStatuses:any
  id:any
  loading: boolean=true;
  constructor(private route: ActivatedRoute, private _applicationService:ApplicationService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this._applicationService.refreshApplicationStatusList$.subscribe(
      ()=>{
        this.getApplicationStatuses()
      }
    )
    this.getApplicationStatuses()
  }

  getApplicationStatuses(){
    this._applicationService.getApplicationStatuses(this.id)
    .subscribe(
      (param) => {
        if (param.body) {
          this.loading = false;
          this.applicationStatuses = param.body;
          console.log(this.applicationStatuses);
        }
      },
      (err) => {
      }
    )
  }

  updateStatus(application:any){
    if (this._authService.getRoles()=='admin') {
      let status;
      if (application.pivot.status == 0) {
        status = 1
      } else {
         status = 0
      }
      this._applicationService.updateApplicationStatus(application.pivot.application_id,application.pivot.status_id,status)
      .subscribe(
        // (param)=>{console.log(param)},
        // (error)=>{console.error(error)}
      )
    } 
    }
}
