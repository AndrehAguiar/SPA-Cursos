import { Teacher } from "./Teacher";

export class Course{
    id!: number;
    name!: string;
    duration!: number;
    teachers!: Array<Teacher>
}