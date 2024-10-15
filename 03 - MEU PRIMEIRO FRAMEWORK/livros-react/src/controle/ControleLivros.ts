import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'A Sociedade do Anel', resumo: 'A Sociedade do Anel toma forma.', autores: ['JRR Tolkien', 'Iluvatar']},
    {codigo: 2, codEditora: 3, titulo: 'As Duas Torres', resumo: 'Associações nefastas se costuram.', autores: ['JRR Tolkien', 'Iluvatar']},
    {codigo: 3, codEditora: 2, titulo: 'O Retorno do Rei', resumo: 'O Rei de Gondor retorna e a guerra chega aos portões de Sauron.', autores: ['JRR Tolkien', 'Iluvatar']}
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }
    incluir (livro:Livro): void {
        const novoCodigo = livros.reduce((max,livro)=> (livro.codigo>max ? livro.codigo:max),0)+1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }
    excluir (codigo: number): void {
        const indice = livros.findIndex(livro=> livro.codigo === codigo);
        if (indice !== -1) {
            livros.splice(indice,1);
        }
    }
}
export default ControleLivro;