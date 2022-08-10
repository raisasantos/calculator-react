import React from "react";
import "./Button.css";

export default (props) => {
    let classes = 'button ' //coloquei esse espaço, porque olhei no console e ele estava juntando com outra palavra e não estava entendendo.
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            onClick={e => props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    );
};
    