import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private _http:HttpClient) { }
  private API_URL = environment.api_url;

  getUniversities(param?:Boolean): Observable<any> {
    if(param){
      return this._http.get<any>(`${this.API_URL}/university`,{reportProgress: true, observe: "events",params:{'all':'true'}});
    }
    return this._http.get<any>(`${this.API_URL}/university`,{reportProgress: true, observe: "events"});
  }

  getUniversityPaginate(link:any):Observable<any> {
    return this._http.get<any>(link);
  }

  addUniversity(university:any){
    return this._http.post<any>(`${this.API_URL}/university`,university)
  }
}
