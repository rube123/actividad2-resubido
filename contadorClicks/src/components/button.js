import React from 'react';
import '../css/button.css'

function Button({ text, isButtonClick, listenClick }) {
    return (
        <button
            className={isButtonClick ? 'button-click' : 'button-restart'}
            onClick={listenClick}>
            {text}
        </button>
    );
}

export default Button