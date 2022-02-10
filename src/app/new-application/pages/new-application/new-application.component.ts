import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  steps: any = 1;

  constructor() { }

  ngOnInit(): void {
  }

  set_step(step: any){
    this.steps = step
  }

}
