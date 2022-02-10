import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: any;

  constructor(private _userService:UserService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.getMedia();
    this._userService._refreshAgentDocumentsList$
    .subscribe(()=>{
      this.getMedia()
    });
  }

  getMedia(){
    this._userService.getMediaAsAgent()
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
}
