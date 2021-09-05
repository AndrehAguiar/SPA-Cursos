import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/Teacher';
import { ProfessoresComponent } from '../professores.component';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'spa-professores-table',
  templateUrl: './professores-table.component.html',
  styleUrls: ['./professores-table.component.css']
})

@Injectable({
  providedIn:"root"
})
export class ProfessoresTableComponent implements OnInit {
  
  @Input() teachers!: Array<Teacher>;
  @Input() newTeacher!: boolean;
  teacher!: Teacher;


  constructor(
    private professoresService: ProfessoresService,
    private professoresComponent: ProfessoresComponent)
    { 
    this.professoresService = professoresService;
    this.professoresComponent = professoresComponent;
  }

  ngOnInit(): void {
  }

  loadData(): void{
    this.professoresService.getTeachers()
    .then(async (res:any) => {
      await res.subscribe((data:any)=>{
        this.professoresComponent.teachersPage = data;
        this.professoresComponent.teachers = data.content;
        this.professoresComponent.qtdTeachers = data.numberOfElements;
        this.teachers = this.professoresComponent.teachers;
      })
    })
  }

  clearData():void{
    this.teachers = [];
  }
  
  @Input() addToCourse = (teacher:Teacher) => {
  }

  @Input() chkCourseTeachers = (teacher:Teacher) => {
  }

}
