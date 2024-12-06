import './App.css';
import Quizz from './Components/Quizz';
import HomePage from "./Components/HomePage";
import Ressources from './Components/Ressources';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomePage/>
      </header>

      <body>
        {/*<Quizz/>*/}
        <Ressources/>
      </body>

    </div>
  );
}

export default App;
