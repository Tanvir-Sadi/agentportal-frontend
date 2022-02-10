import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsLayoutComponent } from './layout/cms-layout/cms-layout.component';
import { SharedModule } from './shared/shared.module';
import { AgentLayoutComponent } from './layout/agent-layout/agent-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CmsLayoutComponent,
    AgentLayoutComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
