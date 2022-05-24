import React from 'react';
import { useState } from 'react';
const Dropdownitem = (props) => {
    const [itemState,setItemState] = useState(props.itemState);

    const handleItemMouseEnter = () =>{
        if(itemState !== 'active'){
            setItemState('hover');
        }
    }

    const handleItemMouseLeave = () =>{
        if(itemState !== 'active'){
            setItemState('stayed');
        }
        
    }

    const handleItemClick = (evt) =>{
        props.toggleVisible(evt);
        
        if(itemState === 'hover')
        {
            setItemState('active');
            props.addFilterParam(props.field,props.label);
            if (props.label === 'title')
            {
                setItemState('stayed');
            }

            console.log(props);
        }
        if(itemState === 'active')
        {
            setItemState('stayed');
            props.removeFilterParam(props.field,props.label);
        }   
    }


    if (props.dropdownstate === 'active')
    {
        return (
            <div
            onMouseEnter={handleItemMouseEnter} 
            onMouseLeave={handleItemMouseLeave} 
            onClick={handleItemClick} 
            className={`dropdown-item dropdown-item_${itemState}`}
            >
                <div className={`checkbox checkbox checkbox_container `}>
                    <div className={`checkbox checkbox_${itemState}`}></div>
                </div>
                <div  className={`dropdown-item dropdown-item_content`}>
                    {props.field}
                </div>
                
            </div>
        );
    }

    
};

export default Dropdownitem;