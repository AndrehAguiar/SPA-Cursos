import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private BASE_URL = "http://localhost:8080/api/v1/teacher/";
  httpOptions = {
      Headers: new HttpHeaders(
          {'content-type':'application/json'}
      )
  }

  constructor(private http:HttpClient) { }

  getTeachers = async ():Promise<any> => {
    const response = this.http.get(`${this.BASE_URL}`);
    return response;
  }

  createTeacher = async (teacher:Teacher):Promise<any> => {
    const response = this.http.post(`${this.BASE_URL}`, teacher);
    return response;
  }
}
