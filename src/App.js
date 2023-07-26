import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import QuestionGenerator from './components/questionGenerator';
import Grid from './components/grid';


function App() {

  /* Display the grid. The question is generated via the QuestionGenerator file, then the question can be stored within the state of the main App.
  After this, the grid's individual rows are then checked when complete. This check combines each value of the columns of the rows (1, 2, 3, etc. )
  then runs eval() on this string (like the QuestionGenerator does). You could pass the answer to the App's state when passing the question, but this
  might not be necessary. The question is the only thing which needs to match. The answer could be determined within the App.  */

  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuestionGenerator />
      </header>
      <body className="App-body">
        <Grid />
      </body>
    </div>
  );
}

export default App;
