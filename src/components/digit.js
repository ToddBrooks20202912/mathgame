import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

function Digit({position, value}) {
    const {grid} = useContext(AppContext);
    const num = grid[value][position];
    return (
        <div className='digit'> {num}</div>
    );
}

export default Digit;
 