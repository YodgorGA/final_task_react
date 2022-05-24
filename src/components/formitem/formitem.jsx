import React from 'react';
import { useState } from 'react';
const Formitem = (props) => {
    const [{inputType,inputColor},setInputState] = useState({
        inputType:'empty',
        inputColor:'primary',
    })
    const [inputContent,setInputContent] = useState('');

    const handleMouseEnter = () =>{
        setInputState({
            inputType:'hover',
            inputColor:'primary',
        })
    }
    const handleMouseLeave = (evt) =>{
        setInputContent(evt.target.value)   
        if(inputContent === '')
        {
            setInputState({
                inputType:'empty',
                inputColor:'primary',
            });
        }
    }
    const handleMouseDown = () =>{
        setInputState({
            inputType:'active',
            inputColor:'primary',
        })
        
    }
    const handleInputChange = (evt) =>{
        setInputState({
            inputType:'hover',
            inputColor:'primary',
        });
        setInputContent(evt.target.value)
    }
    return (
        <label className={`${props.parent}_label`}>
            {props.label}
            <input type={props.type}
             requre='true'
             autoComplete={'off'}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onClick={handleMouseDown}
             onChange={handleInputChange}
             value={inputContent}
             className={`${props.parent}_input ${props.parent}_input__${(props.type === 'password')? 'password' : 'text'} input input-${inputType} input-${inputType}_${inputColor}`}/>
        </label>
    );
};

export default Formitem;