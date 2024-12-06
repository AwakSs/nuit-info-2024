import logo from './logo.svg';
import './App.css';
import Quizz from './Components/Quizz';
import Ressources from './Components/Ressources';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Omer Dallor
        </p>
       
      </header>

      <body>
        <Ressources/>
      </body>

    </div>
  );
}

export default App;
