import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros'; 
import ControleEditora from './controle/ControleEditora'; 

const LivroDados = () => {
    
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const [opcoes, setOpcoes] = useState([]);

    
    useEffect(() => {
        const editoras = controleEditora.getEditoras().map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));
        setOpcoes(editoras);
        if (editoras.length > 0) {
            setCodEditora(editoras[0].value);
        }
    }, []);

    
    const navigate = useNavigate();

    
    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    
    const incluir = (evento) => {
        evento.preventDefault();
        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        controleLivro.incluir(novoLivro);
        navigate('/');
    };

    return (
        <main class="col-10">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label for="textTitulo" class="form-label">Título:</label>
                    <input class="form-control" id="textTitulo"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div>
                    <label for="textResumo" class="form-label">Resumo:</label>
                    <textarea id="textResumo" class="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div>
                    <label for="selectEditora" class="form-label">Editora:</label>
                    <select id="selectEditora" class="form-select" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="textAutores" class="form-label">Autores (um por linha):</label>
                    <textarea id="textAutores" class="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>

                <button class="btn btn-primary" type="submit">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;
