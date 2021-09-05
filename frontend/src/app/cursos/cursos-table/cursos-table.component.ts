import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { Course } from 'src/app/model/Course';
import { Teacher } from 'src/app/model/Teacher';
import { ProfessoresTableComponent } from 'src/app/professores/professores-table/professores-table.component';
import { CursosComponent } from '../cursos.component';
import { CursosService } from '../cursos.service';

@Component({
  providers:[ProfessoresTableComponent],
  selector: 'spa-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.css']
})

@Injectable({
    providedIn:"root"
})
export class CursosTableComponent implements OnInit {

  @Input() courses!: Array<Course>
  @Input() teachers!: Array<Teacher>;
  @Input() newCourse!: boolean;

  course!: Course;
  newTeacher: boolean = false;
  showTeachers:boolean = false;
  isViewTeachers:boolean = false;
  courseId!: number | undefined;

  constructor(
    private cursoService: CursosService,
    private cursosComponent: CursosComponent,
    private teachersTable: ProfessoresTableComponent)
    {
    this.cursoService = cursoService;
    this.cursosComponent = cursosComponent;
    this.teachersTable = teachersTable;
   }

  ngOnInit(): void {
  }

  viewCourses(curso:Course) : void{
    //console.log("VIEW COURSE" + curso.id);
    
    if(curso.id === this.courseId || this.courseId === undefined) {
      this.showTeachers = !this.showTeachers ? true : false;
      
      if(this.courseId === undefined) {
        this.courseId = curso.id;

        if(this.isViewTeachers) this.teachers = curso.teachers;

      } else {

        this.courseId = undefined;
        if(!this.isViewTeachers && !this.newTeacher && !this.newCourse) this.courses = new Array<Course>();

        if(this.isViewTeachers) this.isViewTeachers = false;
        if(this.newCourse) this.newCourse = false;

        //console.log("ID == NEW | ====> " + this.courseId + " | " + this.teachers);
      }
      //console.log("ID == NEW | ====> " + curso.id);

    }else if(curso.id !== this.courseId){
      this.courseId = curso.id;
      if(this.isViewTeachers) this.teachers = curso.teachers;
      //console.log("ID == OUT | ====> " + curso.id);
    }
  }
  
  showHideTeachers(curso:Course, addTeacher?:boolean):void{

    if(addTeacher && this.isViewTeachers || !addTeacher && this.newTeacher) {
      this.showTeachers = false;
      this.courseId = undefined;    
      this.course = new Course();
    }

    if(!addTeacher){
      this.isViewTeachers = true;
      this.newTeacher = false;

    }else{
      this.isViewTeachers = false;
      this.newTeacher = true;
    }
    
    this.course = curso;
    this.viewCourses(this.course);
  }

  addCourseTeacher(curso:Course):void{

    if(this.teachers == curso.teachers){
      this.showTeachers = false;
    } 
    
    const waitLoading = async () =>{
      if(!this.newTeacher){
        this.newTeacher = true;
        this.teachersTable.loadData();
        console.log("LOADED ==> " + curso.id + " " + this.courseId);
      }
    }

    waitLoading()
    .then(()=>{
      setTimeout(() => {
        this.teachers = this.teachersTable.teachers;
        console.log(this.teachersTable.teachers);
      }, 15);
    })
    .then(()=>{
      setTimeout(() => {
        this.showHideTeachers(curso, true);
      }, 25);
    })    
  }

  loadData(): void{
    
    this.cursoService.getCursos()
    .then(async(res:any) => {
      await res.subscribe((data:any)=>{
        this.cursosComponent.cursosPage = data;
        this.cursosComponent.courses = data.content;
        this.cursosComponent.qtdCourses = data.numberOfElements;
        this.courses = this.cursosComponent.courses;
      })
    })
  }

  clearData():void{
    this.cursosComponent.courses = [];
  }

  @Output() chkCourseTeachers = (teacher:Teacher):boolean => {
    return this.course.teachers.some((el) => el.id === teacher.id);
  }

  @Input() chkAlunoCourses = (curso:Course) => {    
    //console.log("<=== CHECKING ALUNO COURSES ===>");
  }

  @Input() addToAluno = (curso:Course) => {
    //console.log("<== CURSO TABLE ADD TO ALUNO ==>");
  }

  @Input() addToCourse = (teacher:Teacher) => {
    
    if(!this.course.teachers.includes(teacher)) {
      this.course.teachers.push(teacher);
      return;
    }

    const response = this.cursoService.updateCourse(this.course)
    response.then((res:any)=>{
      console.log(res);
      res.subscribe((data:any)=>{
        console.log(data);
        this.teachers = data.teacher;
      })
    }).then(()=>{
      this.loadData();
      this.isViewTeachers = true;
      this.showTeachers = true;
      this.newTeacher = false;
    });
  }

}
