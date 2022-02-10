import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {
  files: any;
  loading: boolean = false;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
      this.files = event.target.files[0];
  }

  upload(){
    var myFormData = new FormData();
    myFormData.append('document', this.files);
    this._userService.uploadMediaAsAgent(myFormData)
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
        console.error(error);
        alert("Something went Wrong!");
      }, 
    );
  }
}
