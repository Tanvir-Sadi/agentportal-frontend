import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  loading: boolean = true;
  universityList: any;
  link: any;
  meta: any;

  constructor(private _universityService:UniversityService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.getUniversities()
  }

  getUniversities(){
    this._universityService.getUniversities().subscribe(
      data=>{
        console.log(data);
        
        if (data.body) {
          this.loading = false;
          this.universityList = data.body.data;
          this.link = data.body.links;
          this.meta = data.body.meta;
          console.log(this.universityList);
        }
      }
    )
  }

  paginateUniversity(link: any){
    console.log(link);
    this._universityService.getUniversityPaginate(link)
      .subscribe(
        (param) => {
          this.universityList = param.data;
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
