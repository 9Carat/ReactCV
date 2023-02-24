import React from "react";

export function SecretButton() {

    function changeColor() {
        let colorSelector = Math.floor(Math.random() * 6)

        switch(colorSelector) {
            case 1:
                document.body.style.backgroundColor = "green";
                break;
            case 2:
                document.body.style.backgroundColor = "blue";
                break;
            case 3:
                document.body.style.backgroundColor = "black";
                break;
            case 4:
                document.body.style.backgroundColor = "purple";
                break;
            case 5:
                document.body.style.backgroundColor = "gray";
                break;
        }
    }

    return(
        <button className="secretButton" onClick={changeColor}></button>
    )
}