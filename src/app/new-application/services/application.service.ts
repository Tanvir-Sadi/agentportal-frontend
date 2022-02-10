import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Application } from '../interfaces/application';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  
  private API_URL = environment.api_url;
  _refreshDocumentsList$ = new Subject<void>();
  _refreshMessagesList$ = new Subject<void>();
  _refreshApplicationStatusList$ = new Subject<void>();
  _refreshApplicationFilter$ = new Subject<any>();
  
  application: Application = {
    university_name: '',
    course_level: '',
    course_name: '',
    student_name: '',
    student_email: '',
    student_dob: '',
    visa_refusal: '',
    nationality: '',
    student_number: '',
    user_id: 0,
    updated_at: '',
    created_at: '',
    id: 0,
    application_id: '',
    course_intake: '',
    passport_number: '',
    passport_expire_date: ''
  };
  private courseInformation:any;
  private studentInformation:any;

  
  constructor(private _http:HttpClient) { }

  setCourseInformation(ci:any){
    this.courseInformation = ci;
    this.application.university_name = ci.university_name;
    this.application.course_level = ci.course_level;
    this.application.course_intake = ci.course_intake;
    this.application.course_name = ci.course_name;
  }

  get refreshDocumentsList$(){
    return this._refreshDocumentsList$;
  }

  get refreshMessagesList$(){
    return this._refreshMessagesList$;
  }

  get refreshApplicationStatusList$(){
    return this._refreshApplicationStatusList$;
  }

  get refreshApplicationFilter$(){
    return this._refreshApplicationFilter$.asObservable();
  }

  getCourseInformation(){
    return this.courseInformation;
  }
  
  getStudentInformation(){
    return this.studentInformation;
  }
  
  setStudentInformation(si:any){
    this.studentInformation = si;
    this.application.student_name = si.student_name;
    this.application.student_email = si.student_email;
    this.application.student_dob = si.student_dob;
    this.application.visa_refusal = si.visa_refusal;
    this.application.nationality = si.nationality;
    this.application.student_number = si.student_number;
    this.application.passport_number = si.passport_number;
    this.application.passport_expire_date = si.passport_expire_date;
  }

  // New Application
  addNewApplication(){
    this.courseInformation = ''
    this.studentInformation = ''
    return this._http.post<Application>(`${this.API_URL}/application`, this.application)
  }

  getApplications(): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/application`,{reportProgress: true, observe: "events"});
  }

  getApplication(id:any): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/application/${id}`,{reportProgress: true, observe: "events"});
  }

  getApplicationPaginate(link:any): Observable<any> {
    return this._http.get<any>(link);
  }

  getApplicationFilter(param:HttpParams){
    let value = this._http.get<any>(`${this.API_URL}/application`,{params:param})
    this._refreshApplicationFilter$.next(value)
  }

  deleteApplication(id:any){
    return this._http.delete<any>(`${this.API_URL}/application/${id}`);
  }

  uploadFile(document:any, id:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this._http.post<any>(`${this.API_URL}/application/${id}/upload`, document, {reportProgress: true, observe: "events", headers:headers})
    .pipe(
      tap(() => {
          this._refreshDocumentsList$.next();
      }));
  }


  getMedia(id:any): Observable<any>{
    return this._http.get<any>(`${this.API_URL}/application/${id}/getmedia`);
  }

  getMessages(id:any): Observable<Message[]>{
    return this._http.get<Message[]>(`${this.API_URL}/application/${id}/message`);
  }

  addMessage(message:any, id:any){
    return this._http.post<any>(`${this.API_URL}/application/${id}/message`,message)
    .pipe(
      tap(() => {
          this._refreshMessagesList$.next();
      }));
  }

  getApplicationStatuses(id:any): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/application/${id}/status`,{reportProgress: true, observe: "events"});
  }

  updateApplicationStatus(applicationid:any, statusid:any, statuses:any){
    let data={status:statuses}
    return this._http.post<any>(`${this.API_URL}/application/${applicationid}/status/${statusid}`,data)
    .pipe(
      tap(() => {
          this._refreshApplicationStatusList$.next();
      }));
  }

}

