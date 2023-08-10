import React from "react";
import {useState} from "react";
import { gridReset } from "../Questions";
import Digit from "./digit";

function Grid() {
    const [] = useState();
    return (
        <div className="gridParent"> {/* After this, the grid's individual rows are checked */}
            <div className="numRow">
                <Digit position={0} value={0}/> {/* Arrays start at 0, value is 0 as that's the row number*/}
                <Digit position={1} value={0}/> 
                <Digit position={2} value={0}/> 
                <Digit position={3} value={0}/> 
                <Digit position={4} value={0}/> 
            </div>
            <div className="numRow">
                <Digit position={0} value={1}/> 
                <Digit position={1} value={1}/> 
                <Digit position={2} value={1}/> 
                <Digit position={3} value={1}/> 
                <Digit position={4} value={1}/> 
            </div>
            <div className="numRow">
                <Digit position={0} value={2}/> 
                <Digit position={1} value={2}/> 
                <Digit position={2} value={2}/> 
                <Digit position={3} value={2}/> 
                <Digit position={4} value={2}/>  
            </div>
            <div className="numRow">
                <Digit position={0} value={3}/> 
                <Digit position={1} value={3}/> 
                <Digit position={2} value={3}/> 
                <Digit position={3} value={3}/> 
                <Digit position={4} value={3}/>  
            </div>
            <div className="numRow"> 
                <Digit position={0} value={4}/> 
                <Digit position={1} value={4}/> 
                <Digit position={2} value={4}/> 
                <Digit position={3} value={4}/> 
                <Digit position={4} value={4}/>  
            </div>
        </div>
        
    )
}
export default Grid;