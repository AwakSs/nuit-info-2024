import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="leftContainer">
                <a>Omer Dallor</a>
            </div>
            <div className="rightContainer">
                <a>Accueil</a>
                <a>Ressources</a>
                <a>Quizz</a>
            </div>
        </div>
    );
}

export default NavBar;
