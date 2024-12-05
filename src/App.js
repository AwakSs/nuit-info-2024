import logo from './logo.svg';
import './App.css';
import Quizz from './Components/Quizz';



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
        <Quizz/>
      </body>

    </div>
  );
}

export default App;
