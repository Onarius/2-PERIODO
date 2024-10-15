import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar bg-dark" data-bs-theme="dark">
                    <ul className="navbar-nav list-group-horizontal" id="menuTopo">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Novo</Link>
                        </li>
                    </ul>
                </nav>
                
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
