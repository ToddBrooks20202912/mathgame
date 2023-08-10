import logo from './components/favicon.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import QuestionGenerator from './components/questionGenerator';
import Grid from './components/grid';
import Sounds from './components/sounds';
import {createContext} from 'react';
import {useState} from 'react';
import {gridReset} from "./Questions";
import Numpad from "./components/numpad";

export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(gridReset);

  /* then the question can be stored within the state of the main App.
   are then checked when complete. This check combines each value of the columns of the rows (1, 2, 3, etc. )
  then runs eval() on this string (like the QuestionGenerator does). You could pass the answer to the App's state when passing the question, but this
  might not be necessary. The question is the only thing which needs to match. The answer could be determined within the App.  */
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <div className='App-Logo-Container'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        
        <AppContext.Provider value={{grid, setGrid}}> {/* Push state using Context, allows components down the line to access state functions */}
          <QuestionGenerator /> {/* The question is generated via the QuestionGenerator file */}
          <Grid /> {/* Display the grid. */}
        </AppContext.Provider> 
        <Numpad />
        <Sounds />
        
      </header>
    </div>
  );
}

// if guessed word = correct
  // else increase attempt
  // new row

// if attempts are complete but not correct

// if attempt is not yet complete
  // make the attempt not submittable

// reset question OR new attempt
  // generate new question 
  // clear grid

export default App;
