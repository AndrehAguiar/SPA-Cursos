import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { CursosTableComponent } from 'src/app/cursos/cursos-table/cursos-table.component';
import { Aluno } from 'src/app/model/Aluno';
import { Course } from 'src/app/model/Course';
import { AlunosComponent } from '../alunos.component';
import { AlunosService } from '../alunos.component.service';

@Component({
  providers:[CursosTableComponent],
  selector: 'spa-alunos-table',
  templateUrl: './alunos-table.component.html',
  styleUrls: ['./alunos-table.component.css']
})

@Injectable({
  providedIn:"root"
})
export class AlunosTableComponent implements OnInit {
  
  @Input() alunos!: Array<Aluno>;
  @Input() courses!: Array<Course>;
  aluno!:Aluno;
  newCourse: boolean = false;
  showCourses:boolean = false;
  isViewCourses:boolean = false;
  alunoId!: number | undefined;

  constructor(private alunoService: AlunosService,
    private alunosComponent: AlunosComponent,
    private cursosTable: CursosTableComponent)
    { 
    this.alunoService = alunoService;
    this.alunosComponent = alunosComponent;
    this.cursosTable = cursosTable;
  }

  ngOnInit(): void {
  }

  viewCourses(aluno:Aluno) : void{
    //console.log("VIEW COURSE" + aluno.id);
    
    if(aluno.id === this.alunoId || this.alunoId === undefined) {
      this.showCourses = !this.showCourses ? true : false;
      
      if(this.alunoId === undefined) {
        this.alunoId = aluno.id;
        if(this.isViewCourses) this.courses = aluno.courses;

      } else {

        this.alunoId = undefined;
        this.courses = new Array<Course>();

        if(this.isViewCourses) this.isViewCourses = false;
        if(this.newCourse) this.newCourse = false;
        console.log("ID == NEW | ====> " + this.alunoId + " | " + this.courses);
      }
      console.log("ID == NEW | ====> " + aluno.id);

    }else if(aluno.id !== this.alunoId){
      this.alunoId = aluno.id;

      if(this.isViewCourses) this.courses = aluno.courses;
      console.log("ID == OUT | ====> " + aluno.id);
    }
  }
  
  showHideCourses(aluno:Aluno, addCourse?:boolean):void{
    

    if(addCourse && this.isViewCourses || !addCourse && this.newCourse) {
      this.showCourses = false;
      this.alunoId = undefined;    
      this.aluno = new Aluno();
    }

    if(!addCourse){
      this.isViewCourses = true;
      this.newCourse = false;
    }else{
      this.isViewCourses = false;
      this.newCourse = true;
    }
    
    this.aluno = aluno;
    this.viewCourses(this.aluno);
  }

  addAlunoCourse(aluno:Aluno):void{

    //console.log("ADD IN ==> " + this.alunoId);
    
    const waitLoading = async () =>{
      if(!this.newCourse){
        this.newCourse = true;
        this.cursosTable.loadData();
        //console.log("LOADED ==> " + aluno.id + " " + this.alunoId);
      }
    }

    waitLoading()
    .then(()=>{
      setTimeout(() => {
        this.courses = this.cursosTable.courses;
        console.log(this.cursosTable.courses);
      }, 15);
    })
    .then(()=>{
      setTimeout(() => {
        this.showHideCourses(aluno, true);
      }, 25);
    })    
  }

  loadData():void{
    this.alunoService.getAlunos()
    .then((res:any) => {
      res.subscribe((data:any)=>{
        this.alunosComponent.alunosPage = data;
        this.alunosComponent.alunos = data.content;
        this.alunosComponent.qtdAlunos = data.numberOfElements;
      })
    })
  }

  clearData():void{
    this.alunos = [];
  }
  
  addToAluno = (curso:Course) => {
    
    this.aluno.courses.push(curso);
    const response = this.alunoService.updateAluno(this.aluno)
    response.then((res)=>{
      console.log(res);
      res.subscribe((data:any)=>{
        console.log(data);
        this.courses = data.courses;
      })
    }).then(()=>{
      this.loadData();
      this.isViewCourses = true;
      this.showCourses = true;
      this.newCourse = false;
    });
  }

  @Output() chkAlunoCourses = (curso:Course):boolean => {
    return this.aluno.courses.some((el) => el.id === curso.id);
  }

}
