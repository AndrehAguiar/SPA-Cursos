import { Component, Injectable, OnInit} from '@angular/core';
import { CursosTableComponent } from '../cursos/cursos-table/cursos-table.component';
import { Aluno } from '../model/Aluno';
import { Page } from '../model/Page';
import { AlunosTableComponent } from './alunos-table/alunos-table.component';
import { AlunosService } from './alunos.component.service';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

@Injectable({
  providedIn:"root"
})
export class AlunosComponent implements OnInit {
  
  tableState: string = "Show";
  showTable: boolean = false;
  showForm: boolean = false;
  qtdAlunos: number = 0;
  alunosPage!: Page;
  alunos!: Array<Aluno>;
  alunosTable!:AlunosTableComponent;
  
  
  constructor(private alunoService: AlunosService, cursosTable: CursosTableComponent) {
    this.alunoService = alunoService;
    this.alunosTable = new AlunosTableComponent(this.alunoService, this, cursosTable);
  }

  ngOnInit(): void {
    this.getAlunos();
  }

  changeButton():void{
    this.tableState = !this.showTable ?  "Show" : "Hide";
  }
  
  showHideTable():void {
    if(this.showForm) this.showForm = false;
    !this.showTable ? this.getAlunos() : this.alunosTable.clearData();
    this.showTable = !this.showTable ? true : false;
    this.changeButton();
  }

  showHideForm():void{
    if(this.showTable) {
      this.showTable = false;
      this.changeButton();
    };
    this.showForm = !this.showForm ? true : false;
  }

  getAlunos():void{
    this.alunosTable.loadData();
  }
}
