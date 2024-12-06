import React from 'react';
import './HomePage.css';
import NavBar from "./NavBar";
import ExploreButton from "./ExploreButton";

const HomePage = () => {
    return (
        <div className="HomePageContainer">
            <p className="title">
                L’Océan et le corps humain
            </p>
            <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec at leo tincidunt, pretium lorem ut, vulputate urna.
                Aenean hendrerit fringilla nibh eu euismod.
                Pellentesque porta urna ac purus faucibus posuere.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
            </p>
            <ExploreButton/>
        </div>
    );
}

export default HomePage;
