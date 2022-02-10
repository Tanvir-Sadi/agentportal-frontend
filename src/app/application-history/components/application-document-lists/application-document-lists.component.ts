import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationService } from 'src/app/new-application/services/application.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-application-document-lists',
  templateUrl: './application-document-lists.component.html',
  styleUrls: ['./application-document-lists.component.css']
})
export class ApplicationDocumentListsComponent implements OnInit {
  id: any;
  documents:any;
  private API_URL = environment.api_url;
  url:string ='';

  constructor(private route: ActivatedRoute, private _applicationService:ApplicationService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMedia();
    this._applicationService._refreshDocumentsList$
    .subscribe(()=>{
      this.getMedia()
    });
  }

  getMedia(){
    this._applicationService.getMedia(this.id)
      .subscribe(
        (param) => {
          this.documents = param;
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

  downloadMedia(media:any){
    this.url = this.API_URL.replace('/api','');
    window.open(
      `${this.url}/storage/${media.id}/${media.file_name}`,
      '_blank'
    );    
  }

}
