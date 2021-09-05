import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlunosComponent } from 'src/app/alunos/alunos.component';
import { AlunosService } from 'src/app/alunos/alunos.component.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'spa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  showOptions!: boolean;
  @Input() page!: string;

  constructor(private home: HomeComponent) { 
    this.home = home;
  }

  ngOnInit(): void {
  }

  showHideOptions():void{
    this.showOptions = !this.showOptions ? true : false;
  }

  goToPage(page:string):void{
    this.home.page = page;
    this.showHideOptions();
  }
}
