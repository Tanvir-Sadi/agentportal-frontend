import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationService } from 'src/app/new-application/services/application.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
  id: any;
  files: any;
  type: any;
  loading: boolean = false;
  roles: any;

  constructor(private route: ActivatedRoute, private _applicationService:ApplicationService,private _authService:AuthService) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params.id;
    this.roles = this._authService.getRoles()
  }

  onSubmit(){
    var myFormData = new FormData();
    myFormData.append('document', this.files);
    myFormData.append('type', this.type);
    this._applicationService.uploadFile(myFormData,this.id)
    .subscribe(
      (event:any)=>{
        if (event.type && event.loaded) {
          this.loading =true;
        }else{
          this.loading = false;
        }
      },
      error=>{ 
        this.loading = false;  
                
        if (error instanceof HttpErrorResponse) {
          if (error.status == 500) {
            console.error(error);
            alert(error.error.message);
          } else {
            console.error(error);
            alert("Hey! Your Uploaded file is "+error.statusText)
          }
        }
      }, 
    );
  }
  onFileSelected(event:any){
    this.files = event.target.files[0];  
  }
  onChange(event:any){
    this.type = event.target.value;  
  }

}
