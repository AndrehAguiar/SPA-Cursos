# Alunos-api

##### Documentação completa em: https://documenter.getpostman.com/view/4791077/U16gPSKS

---

###### Aluno

POST / CreateAluno

http://localhost:8080/api/v1/aluno/

**BODY**raw

```json
{
    "id":null,
    "name":"Alexandre",
    "email":"alexandre@andre.com",
    "age":45,
    "courses":null
}
```

##### Example Request

CreateAluno

```javascript
curl --location --request POST 'http://localhost:8080/api/v1/aluno/' \
--data-raw '{
    "id":null,
    "name":"Alexandre",
    "email":"alexandre@andre.com",
    "age":45,
    "courses":null
}
```

##### PUT / UpdateAluno

http://localhost:8080/api/v1/aluno/

**BODY**raw

```json
{
    "id": 1,
    "name": "Alexandre",
    "email": "alexandre@andre.com",
    "age": 45,
    "courses": [
        {
            "id": 1,
            "name": "Engenharia da Computação",
            "duration": 36
        }
    ]
}
```

UpdateAluno

```javascript
curl --location --request PUT 'http://localhost:8080/api/v1/aluno/' \
--data-raw '{
    "id": 1,
    "name": "Alexandre",
    "email": "alexandre@andre.com",
    "age": 45,
    "courses": [
        {
            "id": 1,
            "name": "Engenharia da Computação",
            "duration": 36
        }
    ]
}'
```

GET / FindAluno

http://localhost:8080/api/v1/aluno/1

**BODY**raw

```json
{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}
```

FindAluno

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/aluno/1' \
--data-raw '{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}'
```

GET / FindAlunos

http://localhost:8080/api/v1/aluno/

**BODY**raw

```json
{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}
```

FindAlunos

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/aluno/' \
--data-raw '{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}'
```

---

###### Curso

POST / CreateCourse

http://localhost:8080/api/v1/course/

**BODY**raw

```json
{
    "id":null,
    "name":"Engenharia da Computação",
    "duration": 36,
    "teachers":[]
}
```

CreateCourse

```javascript
curl --location --request POST 'http://localhost:8080/api/v1/course/' \
--data-raw '{
    "id":null,
    "name":"Engenharia da Computação",
    "duration": 36
}
```

PUT / UpdateCourse

http://localhost:8080/api/v1/course/

**BODY**raw

```json
{
    "id": 2,
    "name": "Engenharia da Computação 1"
}
```

UpdateCourse

```javascript
curl --location --request PUT 'http://localhost:8080/api/v1/course/' \
--data-raw '{
    "id": 2,
    "name": "Engenharia da Computação 1"
}'
```

GET / FindCourse

http://localhost:8080/api/v1/course/2

**BODY**raw

```json
{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}
```

FindCourse

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/course/2' \
--data-raw '{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}'
```

GET / FindCourses

http://localhost:8080/api/v1/course/

**BODY**raw

```json
{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}
```

FindCourses

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/course/' \
--data-raw '{
    "id":1,
    "name":"André Aguiar",
    "email":"andre@andre.com",
    "age":39,
    "courses":[]
}'
```

---

###### Professor

POST / CreateTeacher

http://localhost:8080/api/v1/teacher/

**BODY**raw

```json
{
    "id":null,
    "name":"Pardal",
    "degree":"Master"
}
```

CreateTeacher

```javascript
curl --location --request POST 'http://localhost:8080/api/v1/teacher/' \
--data-raw '{
    "id":null,
    "name":"Pardal",
    "degree":"Master"
}'
```

PUT / UpdateTeacher

http://localhost:8080/api/v1/teacher/

**BODY**raw

```json
{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}
```

UpdateTeacher

```javascript
curl --location --request PUT 'http://localhost:8080/api/v1/teacher/' \
--data-raw '{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}'
```

GET / GetTeachers

http://localhost:8080/api/v1/teacher/

**BODY**raw

```json
{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}
```

GetTeachers

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/teacher/' \
--data-raw '{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}'
```

GET / GetTeacher

http://localhost:8080/api/v1/teacher/1

**BODY**raw

```json
{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}
```

GetTeacher

```javascript
curl --location --request GET 'http://localhost:8080/api/v1/teacher/1' \
--data-raw '{
    "id":1,
    "name":"Pardal",
    "degree":"Doctor"
}'
```