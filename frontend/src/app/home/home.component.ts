import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

@Injectable({providedIn:"root"})
export class HomeComponent implements OnInit {

  page: string = 'aluno';
  constructor() { }

  ngOnInit(): void {
  }

}
