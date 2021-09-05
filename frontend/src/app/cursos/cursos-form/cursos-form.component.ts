import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { CursosTableComponent } from '../cursos-table/cursos-table.component';
import { CursosComponent } from '../cursos.component';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'spa-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  course:Course = new Course();
  submitted: boolean = false;

  constructor(private cursoService: CursosService, private cursosComponent: CursosComponent)
    {
    this.cursoService = cursoService;
    this.cursosComponent = cursosComponent;
   }

  ngOnInit(): void {
  }

  save():void{
    const response = this.cursoService.createCurso(this.course);
    response.then((data)=> {
      data.subscribe(() => {
        this.course = new Course();
      })      
    }, error => console.log(error))
    .then(()=>{
      this.cursosComponent.getCursos();
      this.cursosComponent.showForm = false;
    })
    .then(() => {
      setTimeout(()=>{
        this.cursosComponent.showHideTable();
      }, 200)
    });
  }

  onSubmit():void{ 
    this.submitted = true;
    this.save();
  }

}
