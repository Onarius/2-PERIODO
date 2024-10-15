export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(titulo: string, codEditora: number, codigo: number, resumo: string, autores: string[])
    {
        this.codEditora = codEditora;
        this.titulo = titulo;  
        this.codigo = codigo;
        this.resumo = resumo;
        this.autores = autores;
    }
}