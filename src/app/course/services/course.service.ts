import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private _http:HttpClient) { }
  private API_URL = environment.api_url;

  getCourses(universityid:any): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/admin/university/${universityid}/course`,{reportProgress: true, observe: "events"});
  }

  getCoursePaginate(link:any):Observable<any> {
    return this._http.get<any>(link);
  }

  addCourse(course:any){
    return this._http.post<any>(`${this.API_URL}/admin/course`,course)
  }
  getCoursesName(university:string, level:string, intake:string): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/course/search`,{
      params:{
        'filter[university.name]':university,
        'filter[intakes.name]':intake,
        'filter[levels.name]':level,
      }
    });
  }
}
