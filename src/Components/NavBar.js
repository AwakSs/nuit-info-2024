import React from 'react';
import './NavBar.css';

const NavBar = ({ setCurrentView, currentView }) => {

    const getButtonClass = (view) => {
        return currentView === view ? 'active' : '';
    };

    return (
        <header className="header">
            <h1 className="logo">Omer Dallor</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a className={getButtonClass('accueil')} onClick={() => setCurrentView('accueil')}>Accueil</a>
                    </li>
                    <li>
                        <a className={getButtonClass('ressources')} onClick={() => setCurrentView('ressources')}>Ressources</a>
                    </li>
                    <li>
                        <a className={getButtonClass('quizz')} onClick={() => setCurrentView('quizz')}>Quizz</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
