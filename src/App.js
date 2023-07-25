import logo from './logo.svg';
import './App.css';
import QuestionGenerator from './components/questionGenerator';

function App() {
  return (
    <div className="App">
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
