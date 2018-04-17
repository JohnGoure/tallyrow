import React from 'react'

let click = "trigger";

const clicked = () => {
        if (click == "trigger") {
                click = "trigger clicked";
                box = !box;
        }
        else {
                click = "trigger";
                box = !box;
        }
}

let box = false;

export const Stats = () => (
        <div className={click} onClick={clicked()}>
                <div className="box"></div>
        </div>
)