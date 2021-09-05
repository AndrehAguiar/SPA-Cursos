import { Component, Injectable, OnInit } from '@angular/core';
import { Page } from '../model/Page';
import { Teacher } from '../model/Teacher';
import { ProfessoresTableComponent } from './professores-table/professores-table.component';
import { ProfessoresService } from './professores.service';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

@Injectable({
  providedIn:"root"
})
export class ProfessoresComponent implements OnInit {

  tableState:string = "Show";
  showTable: boolean = false;
  showForm:boolean = false;
  qtdTeachers: number = 0;
  teachersPage!: Page;
  teachers!: Array<Teacher>;
  professoresTable!: ProfessoresTableComponent;

  constructor(private teachersService: ProfessoresService) {
    this.teachersService = teachersService;
    this.professoresTable = new ProfessoresTableComponent(this.teachersService, this);
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  changeButton(): void{
    this.tableState = !this.showTable ? "Show" : "Hide";
  }

  showHideTable(): void{
    if(this.showForm) this.showForm = false;
    !this.showTable ? this.professoresTable.loadData() : this.professoresTable.clearData();
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

  getTeachers():void{
    this.professoresTable.loadData();
  }

}
