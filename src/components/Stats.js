import React from 'react'

let click = "trigger";

const clicked = () => {
        if (click == "trigger") {
                click = "trigger clicked";
                newbox = !newbox;
        }
        else {
                click = "trigger";
                newbox = !newbox;
        }
}

let newbox = false;

export const Stats = () => (
        <div className={click} onClick={clicked()}>
                {newbox ? <div className="box"></div> : null}
        </div>
)