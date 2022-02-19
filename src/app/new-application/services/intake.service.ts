import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  private API_URL = environment.api_url;
  constructor(private _http:HttpClient) { }

  getIntakes(university:string): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/intake`,{params:{'filter[courses.university.name]':university}});
  }
}
