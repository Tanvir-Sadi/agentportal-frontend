import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private API_URL = environment.api_url;
  constructor(private _http:HttpClient) { }
  
  getlevels(university:string, intake:string): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/level`,
    {
      params:{
        'filter[courses.university.name]':university,
        'filter[courses.intakes.name]':intake
      }
    });
  }
}
