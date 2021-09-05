import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private BASE_URL = "http://localhost:8080/api/v1/course/";
  httpOptions = {
      Headers: new HttpHeaders(
          {'content-type':'application/json'}
      )
  }

  constructor(private http:HttpClient) { }

  getCursos = async ():Promise<any> => {
    const response = this.http.get(`${this.BASE_URL}`);
    return response;
  }

  createCurso = async (curso:Course):Promise<any> => {
    const response = this.http.post(`${this.BASE_URL}`, curso);
    return response;
  }

  updateCourse = async (curso:Course | undefined):Promise<any> => {
    const response = this.http.put(`${this.BASE_URL}`, curso);
    return response;
  }

}
