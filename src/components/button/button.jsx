import React from 'react';
import { useState } from 'react';

const Button = (props) => {

    const [buttonState,setButtonState] = useState('stayed');

    const handleMouseEnter = () =>{
        setButtonState('hovered');
    }
    const handleMouseLeave = () =>{
        setButtonState('stayed');
    }
    const handleMouseDown = (evt) =>{
        evt.preventDefault();
        setButtonState('active');
    }
    return (
            <button 
                type='submit'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onClick={props.onClick}
                className={`${props.parent}_button button button-${props.color} button-${props.color}_${buttonState}`}
                >{props.content}
                </button>
    );
};

export default Button;