import { Component, Injectable, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { AlunosComponent } from '../alunos.component';
import { AlunosService } from '../alunos.component.service';

@Component({
  selector: 'spa-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})

@Injectable({
  providedIn:"root"
})
export class AlunosFormComponent implements OnInit {

  aluno:Aluno = new Aluno();
  submitted:boolean = false;  

  constructor(private alunoService: AlunosService, private alunosComponent: AlunosComponent) { 
    this.alunoService = alunoService;
    this.alunosComponent = alunosComponent;
  }

  ngOnInit(): void {
  }

  save():void{
    const response = this.alunoService.createAluno(this.aluno);
    response.then((data)=> {
      data.subscribe(() => {
        this.aluno = new Aluno();
      })      
    }, error => console.log(error))
    .then(()=>{
      this.alunosComponent.getAlunos();
      this.alunosComponent.showForm = false;
    })
    .then(() => {
      setTimeout(()=>{
        this.alunosComponent.showHideTable();
    }, 200)
    });
  }

  onSubmit():void{
    this.submitted = true;
    this.save();
  }

}
