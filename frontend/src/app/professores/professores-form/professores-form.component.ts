import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/Teacher';
import { ProfessoresComponent } from '../professores.component';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'spa-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent implements OnInit {

  teacher:Teacher = new Teacher();
  submitted: boolean = false;

  constructor(private teacherService: ProfessoresService, private teacherComponent: ProfessoresComponent) {
    this.teacherService = teacherService;
    this.teacherComponent = teacherComponent;
  }

  ngOnInit(): void {
  }

  save():void{
    const response = this.teacherService.createTeacher(this.teacher);
    response.then((data)=> {
      data.subscribe(() => {
        this.teacher = new Teacher();
      })      
    }, error => console.log(error))
    .then(()=>{
      this.teacherComponent.getTeachers();
      this.teacherComponent.showForm = false;
    })
    .then(() => {
      setTimeout(()=>{
        this.teacherComponent.showHideTable();
      }, 150)
    });
  }

  onSubmit():void{ 
    this.submitted = true;
    this.save();
  }

}
