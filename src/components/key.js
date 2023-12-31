import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Key({keyMap, twoKey}) {
    const {grid, setGrid, attemptPos, setPos, question, setgameStatus} = useContext(AppContext);
    const selectNum = () => {
        console.log(question);
        if (keyMap === "ENT") {
            if (attemptPos.keyPos !== 5) return;
            let userQuestion = "";
            for (let i = 0; i < 5; i++) {
                userQuestion += grid[attemptPos.rowPos][i]
            }

            if (question === userQuestion){
                setgameStatus({gameEnded: true, correctlyGuessed: true})
            }

            setPos({rowPos: attemptPos.rowPos + 1, keyPos: 0}) // move to the next row

            if (attemptPos.rowPos === 4 && attemptPos.keyPos === 5 && question != userQuestion) {
                if (question === userQuestion) {
                    setgameStatus({gameEnded: true, correctlyGuessed: true})
                }
                setgameStatus({gameEnded: true, correctlyGuessed: false})
            }

        } else if (keyMap === "DEL") {
            if (attemptPos.keyPos === 0) return;
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