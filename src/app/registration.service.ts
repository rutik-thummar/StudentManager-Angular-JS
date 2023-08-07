import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  url = "http://localhost:8081/students";

   loginUserFromRemote(user: User): Observable<any> {
    return this._http.post("http://localhost:8081/login", user, { responseType: 'text' as 'json' });
  }
   registerUserFromRemote(user: User){
    return this._http.post("http://localhost:8081/registeruser", user, { responseType: 'text' as 'json' });
  }
  getList(): Observable<any> {
    return this._http.get<any>(`${this.url}`);
  }
  addStudent(student: Student) {
    return this._http.post(`${this.url}`, student, { responseType: 'text' as 'json' });
  }
  editStudent(student: Student) {
    return this._http.put(`${this.url}`, student, { responseType: 'text' as 'json' });
  }
  deleteStudentById(id: Number): Observable<any> {
    return this._http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
  getById(id: number): Observable<any> {
    return this._http.get(`${this.url}/${id}`);
  }
  // handleError(error: Response) { }

  //getUserById(id:number):Onservable<User>{
  //   return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  //   }
}
