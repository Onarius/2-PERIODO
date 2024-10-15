import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const controleEditora = new ControleEditora();
const controleLivro = new ControleLivro();

// Componente auxiliar LinhaLivro
const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                {livro.titulo}<br></br>
                <button class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

// Componente principal LivroLista
const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            const obterLivros = async () => {
                const livrosObtidos = await controleLivro.obterLivros();
                setLivros(livrosObtidos);
                setCarregado(true);
            };
            obterLivros();
        }
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table class="table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;