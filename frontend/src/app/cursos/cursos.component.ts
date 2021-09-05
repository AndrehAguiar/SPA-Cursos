import { Component, Injectable, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { Page } from '../model/Page';
import { ProfessoresTableComponent } from '../professores/professores-table/professores-table.component';
import { CursosTableComponent } from './cursos-table/cursos-table.component';
import { CursosService } from './cursos.service';

@Component({
  selector: 'spa-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

@Injectable({
  providedIn:"root"
})
export class CursosComponent implements OnInit {

  tableState:string = "Show";
  showTable: boolean = false;
  showForm:boolean = false;
  qtdCourses: number = 0;
  cursosPage!: Page;
  courses!: Array<Course>;
  cursosTable!: CursosTableComponent;

  constructor(private cursosService: CursosService, private teachersTable:ProfessoresTableComponent) {
    this.cursosService = cursosService;
    this.cursosTable = new CursosTableComponent(this.cursosService, this, teachersTable);
   }

  ngOnInit(): void {
    this.getCursos();
  }

  changeButton(): void{
    this.tableState = !this.showTable ? "Show" : "Hide";
  }

  showHideTable(): void{
    if(this.showForm) this.showForm = false;
    !this.showTable ? this.getCursos() : this.cursosTable.clearData();
    this.showTable = !this.showTable ? true : false;
    this.changeButton();
  }

  showHideForm(): void{
    if(this.showTable) {
      this.showTable = false;
      this.changeButton();
    };
    this.showForm = !this.showForm ? true : false;
  }

  getCursos():void{
    this.cursosTable.loadData();
  }

}
