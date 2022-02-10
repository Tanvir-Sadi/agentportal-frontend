import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  steps: any = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getFragment();
  }
  
  getFragment(){
    this.route.fragment
    .subscribe((fragment) => {
      if(fragment == 'document'){
        this.steps = 3;
      }
    });
  }

  step(step: any){
    this.steps = step;
  }
}
