import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import Grid from './components/grid';
import {createContext} from 'react';
import {useState} from 'react';
import {gridReset} from "./Questions";
import Numpad from "./components/numpad";
import { useEffect } from 'react';
import End from "./components/end";
import $ from 'jquery';


export const AppContext = createContext();

function App() {
  const [grid, setGrid] = useState(gridReset);
  const [attemptPos, setPos] = useState({rowPos:0 , keyPos: 0});
  const [question, setQuestion] = useState("22+22"); // required placeholder, this will error otherwise because react will try and call it upon render when no question state is available //
  const [answer, setAnswer] = useState(); // can be left blank, will be generated and updated along with the question later //
  const [gameEnded, setgameStatus] = useState({gameEnded: false, correctlyGuessed: false});

  useEffect(() => {
    const newQuestion = generateQuestions(); setQuestion(newQuestion); setAnswer(eval(newQuestion))
  }, []);  

  function resetGame() {
    window.location.reload(false);
  }

  /* then the question can be stored within the state of the main App.
   are then checked when complete. This check combines each value of the columns of the rows (1, 2, 3, etc. )
  then runs eval() on this string (like the QuestionGenerator does). You could pass the answer to the App's state when passing the question, but this
  might not be necessary. The question is the only thing which needs to match. The answer could be determined within the App.  */
  return (
    <div className="App">
      <Navbar />
      <AppContext.Provider value={{grid, setGrid, attemptPos, setPos, question, answer, gameEnded, setgameStatus}}> {/* Push state using Context, allows components down the line to access state functions */}
      <header className="App-header">
      <h1 id="answerText">Answer: {answer}</h1>
        <Grid /> {/* Display the grid. */}
        {gameEnded.gameEnded ? <End /> : <Numpad />}
        <button onClick={resetGame}>Click me to Reset!</button>
      </header>
      </AppContext.Provider> 
    </div>
  );

  
}

  function randomIntGen(min, max) { 
    return Math.floor(Math.random() * max) + min; /* At the moment, this is always the max of 100, minimum of 1. This always returns a number bigger 
                                                    than 1 but less than 100. */
  }
  
  function randomSignGen() { // I couldn't think of a better way of doing this, luckily, eval exists. //
    switch(randomIntGen(1, 4)) {
      case 1: 
        return "+";
      case 2:
        return "-";
      case 3: 
        return "*";
      case 4:
        return "/";
      default: // Done for good practice, in case the function for randomIntGen is somehow lost/tampered with. //
        return "error";
    }
  }
  
  function isInt(value) { /* Checking if the result of the question is an integer or not, since the grid won't have space for decimals.
                            This could change later on if there are higher difficulties. */
      return !isNaN(value) && parseInt(Number(value)) === value && !isNaN(parseInt(value, 10));
  }
  function generateQuestions() { 
      while (true) { 
      let question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100).toString(); /* question needs to be defined, otherwise javascript believes
                                                                                                            it to be undefined. */
      if (isInt(eval(question)) === false) { 
        question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else if (eval(question) >= 100 || eval(question) <= -100) { // Most the webpage will display while looking good should be 2 digits. //
              question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else if (question.length < 5) {
              question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else {
          // console.log(question, eval(question)); // Debug check so I don't go insane. //
          return question;
        }
      }
  }

export default App;


