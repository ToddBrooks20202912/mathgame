import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

function Digit({position, value}) {
    const {grid, question, attemptPos} = useContext(AppContext);
    const num = grid[value][position];
    const correct = question[position] === num;
    const numberInQuest = !correct && num !== "" && question.includes(num) // its not the right position, validating the empty, but it could include itself within the question //

    const digitState = attemptPos.rowPos > value &&
     (correct ? "correct" : numberInQuest ? "numInQuest" : "incorrect");

    return (
        <div className='digit' id={digitState}>{num}</div>
    );
}

export default Digit;
 