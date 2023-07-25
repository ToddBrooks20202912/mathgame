import React from 'react';
import { useState } from 'react';

function QuestionGenerator() {
    const [question, setQuestion] = useState(" ")
    /* const [answer, setAnswer] = useState(0) <p>Answer: {answer}</p> setAnswer(eval(question))*/
    return(
        <div className='QuestionParent'>
            <button onClick={() => setQuestion(generateQuestions())}></button>
            <p>Question: {question}</p>
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