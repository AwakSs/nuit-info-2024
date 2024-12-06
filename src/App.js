import './App.css';
import Quizz from './Components/Quizz';
import HomePage from "./Components/HomePage";
import Ressources from './Components/Ressources';
import {useState} from "react";
import NavBar from "./Components/NavBar";

function App() {

    const [currentView, setCurrentView] = useState('accueil');

    const renderContent = () => {
        switch (currentView) {
            case 'accueil':
                return <HomePage />;
            case 'ressources':
                return <Ressources />;
            case 'quizz':
                return <Quizz />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="App">
            <body className="App-header">
                <div className="blurry-box">
                    <NavBar setCurrentView={setCurrentView} currentView={currentView} />
                    {renderContent()}
                </div>
            </body>
        </div>
    );
}

export default App;
