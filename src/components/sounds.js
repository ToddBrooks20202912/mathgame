import React from "react";
import $ from "jquery";
import mp3file from "./shamikoooooooo.mp3"

function Sounds() {
    const sound1 = new Audio(mp3file);
    let setNumber = 1_000_000;

    $(document).ready(function() {
        $("#100").html(setNumber);
        $(document).on('click', '.sound', function () {  // https://api.jquery.com/on/
        if($(this).attr('id') == 1) {
            sound1.play();
        }
    }); 
        
    });

    return (
        <div className="Sounds">
            <button className="btn btn-dark sound" id="1">Play Sound 1</button>
            <p id="100">Test</p>
        </div>
    );
}

export default Sounds;