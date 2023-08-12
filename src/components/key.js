import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Key({keyMap, twoKey}) {
    const {grid, setGrid, attemptPos, setPos} = useContext(AppContext);
    const selectNum = () => {
        if (keyMap == "ENT") {
            if (attemptPos.keyPos != 5) return;
            setPos({rowPos: attemptPos.rowPos + 1, keyPos: 0}) // move to the next row
        } else if (keyMap == "DEL") {
            if (attemptPos.keyPos == 0) return;
            const statusGrid = [...grid]; // current board at this moment
            statusGrid[attemptPos.rowPos][attemptPos.keyPos] = ""; // deleting/clearing the key stored at this position
            setGrid(statusGrid); // push new grid 
            setPos({...attemptPos, keyPos: attemptPos.keyPos - 1}); // pushes
        } else {
            if (attemptPos.keyPos > 4) { // end of the row
                return;
            }   
            else {
                const statusGrid = [...grid]; // current board at this moment
                statusGrid[attemptPos.rowPos][attemptPos.keyPos] = keyMap; // clicked key = key on row
                setGrid(statusGrid); // push new grid 
                setPos({...attemptPos, keyPos: attemptPos.keyPos + 1}); // currently runs through the entire row, does not actually transfer to the next "attempt" (which is row num)
            }
        }
        
       
    }
    return <div className="numKey" id={twoKey && "twoKey"} onClick={selectNum}>
                {keyMap}
            </div>
}

export default Key;