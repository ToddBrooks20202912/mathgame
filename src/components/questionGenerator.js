import React from 'react';
import { useState, useEffect } from 'react';

function QuestionGenerator() { {/* 1 */} {/* 8 - React recalls QuestionGenerator to get updated JSX */}
    const [question, setQuestion] = useState("2+2"); {/* 2 */} {/* 3 - QuestionGenerator, your code, binds that initial value ("2+2") to the local variable question, 
                                                                and binds the update function created by React to setQuestion */}
                                                                {/* 7 - Upon being called, sets the states with the values they were called with, eg, question becomes
                                                                random ("34 - 20") and answer becomes '4' */}
    const [answer, setAnswer] = useState(4); {/* 4 */}

    /* useEffect(() => { UseEffect calls upon every re-render. Since the page is re-rendering and basinng it's value on the question state value, which is only updated
                        when the button is clicked, this only runs upon the changing of the questions or on further re-rending. This may need to be revised later. 
        setAnswer(eval(question))
    }); */

    return(  
        <div className='QuestionParent'> {/* 5 - All JSX code is turned over to React to display on the HTML page. */}
            <button onClick={() => {const newQuestion = generateQuestions(); setQuestion(newQuestion); setAnswer(eval(newQuestion));}}></button> {/* Much cleaner implementation. */}
            {/* <button onClick={() => {setQuestion(generateQuestions())}}></button> */} {/* 6 - Button click, calls set functions
            but setAnswer is bound to value from step 2*/}
            <p>Question: {question}</p>  {/* 9 - Question is now "34 - 20"*/}
            <p>Answer: {answer}</p> {/* 9 - Answer is now '4'*/}
        </div> 
    )
}

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



export default QuestionGenerator;