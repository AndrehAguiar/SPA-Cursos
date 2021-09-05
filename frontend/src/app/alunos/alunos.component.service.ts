import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aluno } from "../model/Aluno";

@Injectable({
    providedIn: 'root'
  })
export class AlunosService{

    private BASE_URL = "http://localhost:8080/api/v1/aluno/";
    httpOptions = {
        Headers: new HttpHeaders(
            {'content-type':'application/json'}
        )
    }

    constructor(private http: HttpClient){}

    getAlunos = async ():Promise<any> => {
        const response = this.http.get(`${this.BASE_URL}`);
        return response;
    }

    createAluno = async (aluno:Aluno):Promise<any> => {
        const response = this.http.post(`${this.BASE_URL}`, aluno);
        return response;
    }

    updateAluno = async (aluno:Aluno): Promise<any> => {        
        const response = this.http.put(`${this.BASE_URL}`, aluno);
        return response;
    }
}