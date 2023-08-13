import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import mp3file from "./shamikoooooooo.mp3"

function End() {
    const sound1 = new Audio(mp3file)
    const {gameEnded, question, attemptPos} = useContext(AppContext);
    return (
        <div className="EndGame"> 
            <h3>{gameEnded.correctlyGuessed ? "You guessed the question correctly" : "You did not guess the question correctly."}</h3>
            <h1>Correct question: {question}</h1>
            {gameEnded.correctlyGuessed && (<h3>You guessed in {attemptPos.rowPos} attempt/s</h3>)}
        </div>
    )
}

export default End;