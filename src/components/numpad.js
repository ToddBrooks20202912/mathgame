import React from 'react';
import Key from './key';

function Numpad() {

    const layout1 = ["/", "*", "-"];
    const layout2 = ["7", "8", "9"];
    const layout3 = ["4", "5", "6"];
    const layout4 = ["1", "2", "3"];
    const layout5 = ["0", "+", "ENT"];
    const layout6 = ["DEL"];

    return (
        <div className='Numpad'>
            <div className='padRow'> {layout1.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* / * - */}
            <div className='padRow'> {layout2.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* 7 8 9 */}
            <div className='padRow'> {layout3.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* 4 5 6 */}
            <div className='padRow'> {layout4.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* 1 2 3 */}
            <div className='padRow'> {layout5.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* 0 + Enter */}
            <div className='padRow'> {layout6.map((key) => {
                return <Key keyMap={key}/>;
            })}
            </div> {/* DEL (Backspace) */}
        </div>
    )
}

export default Numpad;