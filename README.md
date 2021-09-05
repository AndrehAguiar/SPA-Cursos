# Desenvolvendo SPA com Angular

#### DESCRIÇÃO

Neste projeto foi desenvolvido um front-end no modelo SPA (Single Page Application) utilizando Angular com injeção de dependências com o EventEmitter `@Input()` e `@Output` para transitar variáveis e funções entre os componentes como nos exemplos abaixo:

##### AlunosTableComponent

````typescript
@Output() chkAlunoCourses = (curso:Course):boolean => {
​	return this.aluno.courses.some((el) => el.id === curso.id);
}
````

##### CursosTableComponent

````typescript
@Input() chkAlunoCourses = (curso:Course) => {    
    //console.log("<=== CHECKING ALUNO COURSES ===>");
}
````

##### Disponibilizando o recurso na página HTML alunos-table.component.html

````html
<spa-cursos-table *ngIf="showCourses" [courses]="courses" [newCourse]="newCourse" [addToAluno]="addToAluno" [chkAlunoCourses]="chkAlunoCourses"></spa-cursos-table>
````

Como pôde ser visto acima, foram utilizados os recursos de Data Biding e Diretivas como no exemplo abaixo:

````html
...	<tbody>
        <tr scope="row" *ngFor="let aluno of alunos"> // Diretivas
            <td>{{aluno.name}}</td>
            <td class="text-center">{{aluno.age}}</td>
            <td>{{aluno.email}}</td> // Interpolação
            <td>
                <button class="btn btn-primary" (click)="showHideCourses(aluno)">View Courses</button>  // Event Biding
                <button class="btn btn-outline-primary" (click)="addAlunoCourse(aluno)">Add Course</button>
            </td>
            <td>
                <button class="btn btn-warning">Editar</button>
                <button class="btn btn-danger">Excluir</button>
            </td>
        </tr>
	</tbody> ...
````

O front-end consome uma API Rest desenvolvida em Java com Spring Framework no endpoint `http://localhost:8080/api/v1/< PATH >`

Também foi implementado o ServiceComponent, como no exemplo do CursoServiceComponent abaixo, com os seguintes métodos:

````TypeScript
...
  private BASE_URL = "http://localhost:8080/api/v1/course/";
  httpOptions = {
      Headers: new HttpHeaders(
          {'content-type':'application/json'}
      )
  }

  constructor(private http:HttpClient) { }

  getCursos = async ():Promise<any> => {
    const response = this.http.get(`${this.BASE_URL}`);
    return response;
  }

  createCurso = async (curso:Course):Promise<any> => {
    const response = this.http.post(`${this.BASE_URL}`, curso);
    return response;
  }

  updateCourse = async (curso:Course | undefined):Promise<any> => {
    const response = this.http.put(`${this.BASE_URL}`, curso);
    return response;
  } ...
````

---

O back-end retorna um objeto JSON do tipo PAGE para popular as tabelas, como no exemplo da lista de objetos do tipo Professores abaixo:

````json
retorno do getCursos();
{
    "content": [
        {
            "id": 1,
            "name": "Pardal",
            "degree": "Master"
        },
        {
            "id": 2,
            "name": "Bujinganga",
            "degree": "Doctor"
        },
        {
            "id": 3,
            "name": "Pascoale",
            "degree": "Pos-Degree"
        },
        {
            "id": 4,
            "name": "Emmett",
            "degree": "Doctor"
        }
    ],
    "pageable": "INSTANCE",
    "last": true,
    "totalElements": 4,
    "totalPages": 1,
    "size": 4,
    "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
    },
    "first": true,
    "numberOfElements": 4,
    "number": 0,
    "empty": false
}
````

O back-end tem acesso a um banco de dados com "schema" relacional utilizando tabelas auxiliares para relações "ManyToMany", criado automaticamente pelo "JPARepository"

---

Sendo assim é possível:

1. Inserir novos Cursos, assim como novos Alunos e Professores utilizando respectivamente os métodos `createCurso(), createAlunos() e createTeacher()`;
2. Listar todos os Cursos, Alunos e Professores utilizando respectivamente os métodos `getCursos(), getAlunos() e getTeachers()`;
3. Alterar os Cursos, Alunos e Professores utilizando respectivamente os métodos `updateCourse(), updateAluno() e updateTeacher()`.
4. Vincular cursos aos alunos e professores aos cursos.

###### TODO: Implementar os formulários de alteração dos registros.

---

<span>Angular</span>

<span>**Full-Stack** | **Intermediário**</span>

##### Especialista

<img  width="80px" src="https://avatars.githubusercontent.com/u/26483361?v=4" />

### **Camila Ribeiro**

Engenheira de software sênior, Avanade

###### [Digital Innovation One](https://digitalinnovation.one/sign-up?ref=NL9EADWVZW)

---

<a href="https://www.linkedin.com/in/camila-ferreira-ribeiro/" target="_blank">
<img width="20px" src="https://image.flaticon.com/icons/png/512/174/174857.png"></a>
<span><a href="https://github.com/cahferreira93" target="_blank">
<img width="20px" src="https://image.flaticon.com/icons/png/512/25/25657.png"></a></span>

