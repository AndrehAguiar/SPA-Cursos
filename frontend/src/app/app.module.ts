import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AlunosService } from './alunos/alunos.component.service';
import { HttpClientModule } from '@angular/common/http';
import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';
import { AlunosTableComponent } from './alunos/alunos-table/alunos-table.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { CursosTableComponent } from './cursos/cursos-table/cursos-table.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresTableComponent } from './professores/professores-table/professores-table.component';
import { ProfessoresFormComponent } from './professores/professores-form/professores-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AlunosComponent,
    FooterComponent,
    AlunosFormComponent,
    AlunosTableComponent,
    CursosComponent,
    CursosFormComponent,
    CursosTableComponent,
    ProfessoresComponent,
    ProfessoresTableComponent,
    ProfessoresFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlunosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
