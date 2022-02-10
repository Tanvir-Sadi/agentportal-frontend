import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  user: any;

  constructor(private _userService:UserService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(){
    this._userService.getUser()
    .subscribe(
      (param) => {
        this.user = param;
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
