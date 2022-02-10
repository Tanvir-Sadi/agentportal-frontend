import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.api_url;
  constructor(private _http:HttpClient, private _router:Router) { }
  _refreshAgentDocumentsList$ = new Subject<void>();
  
  get refreshDocumentsList$(){
    return this._refreshAgentDocumentsList$;
  }
  
  getUser(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/profile`);
  }

  getMediaAsAgent(): Observable<any>{
    return this._http.get<any>(`${this.API_URL}/getasagent`);
  }

  uploadMediaAsAgent(document:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http.post<any>(`${this.API_URL}/uploadasagent`, document, {reportProgress: true, observe: "events", headers:headers})
    .pipe(
      tap(() => {
          this._refreshAgentDocumentsList$.next();
      }));
  }

}
