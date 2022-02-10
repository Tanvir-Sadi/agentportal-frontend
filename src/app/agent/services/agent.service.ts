import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private _http:HttpClient) { }
  private API_URL = environment.api_url;
  _refreshAgentsList$ = new Subject<void>();

  get refreshAgentsList$(){
    return this._refreshAgentsList$;
  }

  getAgentRequests(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/admin/agent-request`);
  }

  getVerifiedAgents(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/admin/agent-verified`);
  }

  verifyAgent(id:any){
    let agent={
      status: 'verified'
    }
    return this._http.post<any>(`${this.API_URL}/admin/verify-agent/${id}`,agent)
    .pipe(
      tap(() => {
          this._refreshAgentsList$.next();
      }))
  }
  
  deleteAgent(id:any){
    return this._http.delete<any>(`${this.API_URL}/admin/delete-agent/${id}`)
  }

  getAgentPaginate(link:any): Observable<any> {
    return this._http.get<any>(link);
  }




}
