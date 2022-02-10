import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin: boolean =true;
  roles:any;
  status: any;
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.loggedin = this._authService.isLoggedin()
    this.roles = this._authService.getRoles()
    this.status = this._authService.getStatus()
  }

  logout(){
    if (confirm("Do you want to continue?")) {
      this._authService.logout()
    }
  }
}
