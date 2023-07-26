import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import QuestionGenerator from './components/questionGenerator';


function App() {
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Example.
        </p>
        <QuestionGenerator />
      </header>
    </div>
  );
}

export default App;
