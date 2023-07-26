import React from "react";
import {useState} from "react";
import { gridReset } from "../Questions";

function Grid() {
    const [grid, setGrid] = useState(gridReset);
    return(
        <div className="gridParent">{grid}</div>
        
    )
}
export default Grid;