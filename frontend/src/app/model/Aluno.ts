import { Course } from "./Course";

export class Aluno{
    id!: number;
    name!: string;
    email!: string;
    age!: number;
    courses!: Array<Course>;
}