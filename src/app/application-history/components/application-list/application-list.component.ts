import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  roles:any;
  loading: boolean = true;
  constructor(private _applicationService:ApplicationService, private _authService:AuthService) { }
  applications: any;
  link:any;
  meta:any;

  paginateApplication(link: any){
    this._applicationService.getApplicationPaginate(link)
      .subscribe(
        (param) => {
          this.applications = param.data;
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
  getApplications() {
    this._applicationService.getApplications()
      .subscribe(
        (param) => {
          console.log(param);
                              
          if (param.body) {
            this.loading = false
            this.applications = param.body.data;
            this.link = param.body.links;
            this.meta = param.body.meta;
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

  ngOnInit(): void {
    this.roles=this._authService.getRoles()
    this.getApplications();
    this._applicationService.refreshApplicationFilter$.subscribe(
     (param)=>{       
       param.subscribe(
         (data: any)=>{
           console.log(data);
           
           if (data.data.length==0) {
            this.getApplications()
          }else{
            this.applications = data.data;
            this.link = data.links;
            this.meta = data.meta;
          }
         },
         (error: any)=>{
           console.error(error);
         } 
       )
     } 
    )
  }

}
