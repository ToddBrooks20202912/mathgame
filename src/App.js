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
import {useRef} from 'react';
import Numpad from "./components/numpad";
import { useEffect } from 'react';



export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(gridReset);
  const [attemptPos, setPos] = useState({rowPos:0 , keyPos: 0});
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    const newQuestion = generateQuestions(); setQuestion(newQuestion); setAnswer(eval(newQuestion))
  }, []);

  /* then the question can be stored within the state of the main App.
   are then checked when complete. This check combines each value of the columns of the rows (1, 2, 3, etc. )
  then runs eval() on this string (like the QuestionGenerator does). You could pass the answer to the App's state when passing the question, but this
  might not be necessary. The question is the only thing which needs to match. The answer could be determined within the App.  */
  return (
    <div className="App">
      <Navbar />
      <AppContext.Provider value={{grid, setGrid, attemptPos, setPos}}> {/* Push state using Context, allows components down the line to access state functions */}
      <header className="App-header">
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
        <Grid /> {/* Display the grid. */}
        <Numpad />
        <Sounds />
      </header>
      </AppContext.Provider> 
    </div>
  );

  
}

// <div className='App-Logo-Container'>
//<img src={logo} className="App-logo" alt="logo" />
//</div>

// if guessed word = correct
  // else increase attempt
  // new row

// if attempts are complete but not correct

// if attempt is not yet complete
  // make the attempt not submittable

// reset question OR new attempt
  // generate new question 
  // clear grid


  function randomIntGen(min, max) { 
    return Math.floor(Math.random() * max) + min; /* At the moment, this is always the max of 100, minimum of 1. This always returns a number bigger 
                                                    than 1 but less than 100. */
  }
  
  function randomSignGen() { // I couldn't think of a better way of doing this, luckily, eval exists. //
    switch(randomIntGen(1, 4)) {
      case 1: 
        return " + ";
      case 2:
        return " - ";
      case 3: 
        return " * ";
      case 4:
        return " / ";
      default: // Done for good practice, in case the function for randomIntGen is somehow lost/tampered with. //
        return "error";
    }
  }
  
  function isInt(value) { /* Checking if the result of the question is an integer or not, since the grid won't have space for decimals.
                            This could change later on if there are higher difficulties. */
      return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  }
  function generateQuestions() { 
      while (true) { 
      let question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100).toString(); /* question needs to be defined, otherwise javascript believes
                                                                                                            it to be undefined. */
      if (isInt(eval(question)) == false) { 
        question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else if (eval(question) >= 100 || eval(question) <= -100) { // Most the webpage will display while looking good should be 2 digits. //
              question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else {
              console.log(question, eval(question)); // Debug check so I don't go insane. //
              return question;
          }
      }
  }










export default App;


