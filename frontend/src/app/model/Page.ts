import { Aluno } from "./Aluno"
import { PageOptions } from "./PageOptions";

export class Page{
    content!: Array<Aluno>;
    empty!: boolean;
    first!: boolean;
    last!: boolean;
    number!: number;
    numberOfElements!: number;
    pageable!: string;
    size!: number;
    sort!: PageOptions;
    totalElements!: number;

}