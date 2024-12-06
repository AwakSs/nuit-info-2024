import React from 'react';
import './HomePage.css';
import ExploreButton from "./ExploreButton";

const HomePage = () => {
    return (
        <div className="homePageContainer">
            <p className="title">
                L’Océan et le corps humain
            </p>
            <p className="text">
                L'océan, vaste et mystérieux, est bien plus qu'une étendue d'eau qui sépare les continents. Il joue un rôle fondamental dans le maintien de la vie sur Terre, régulant notre climat, fournissant des ressources essentielles et soutenant une biodiversité incroyable.
            </p>
            <ExploreButton/>
        </div>
    );
}

export default HomePage;
