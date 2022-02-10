import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';
import { ApplicationService } from '../new-application/services/application.service';
import { ApplicationHistoryModule } from '../application-history/application-history.module';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    ApplicationHistoryModule,
    CommonModule,
    ApplicationRoutingModule
  ],
  providers: [
    ApplicationService
  ]
})
export class ApplicationModule { }
