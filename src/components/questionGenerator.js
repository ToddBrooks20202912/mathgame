import React from 'react';
import { useState, useEffect } from 'react';

function QuestionGenerator() { {/* 1 */} {/* 8 - React recalls QuestionGenerator to get updated JSX */}
    const [question, setQuestion] = useState("2+2"); {/* 2 */} {/* 3 - QuestionGenerator, your code, binds that initial value ("2+2") to the local variable question, 
                                                                and binds the update function created by React to setQuestion */}
                                                                {/* 7 - Upon being called, sets the states with the values they were called with, eg, question becomes
                                                                random ("34 - 20") and answer becomes '4' */}
    const [answer, setAnswer] = useState(4); {/* 4 */}

    useEffect(() => {
        setAnswer(eval(question))
    });

    return(  
        <div className='QuestionParent'> {/* 5 - All JSX code is turned over to React to display on the HTML page. */}
            <button onClick={() => {setQuestion(generateQuestions())}}></button> {/* 6 - Button click, calls set functions
            but setAnswer is bound to value from step 2*/}
            <p>Question: {question}</p>  {/* 9 - Question is now "34 - 20"*/}
            <p>Answer: {answer}</p> {/* 9 - Answer is now '4'*/}
        </div> 
    )
}

function randomIntGen(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  
  function randomSignGen() {
    switch(randomIntGen(1, 4)) {
      case 1: 
        return " + ";
      case 2:
        return " - ";
      case 3: 
        return " * ";
      case 4:
        return " / ";
      default:
        return "error";
    }
  }
  
  function isInt(value) {
      return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  }
  function generateQuestions() {
      while (true) {
      let question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100).toString();
      if (isInt(eval(question)) == false) {
        question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else if (eval(question) >= 100 || eval(question) <= -100) {
              question = randomIntGen(1, 100).toString() + randomSignGen() + randomIntGen(1, 100);
          }
      else {
              console.log(question, eval(question));
              return question;
          }
      }
  }



export default QuestionGenerator;