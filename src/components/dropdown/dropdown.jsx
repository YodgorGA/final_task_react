import React from 'react';
import { useState } from 'react';
import Dropdownitem from './dropdownitem/dropdownitem';
import { changeLabel } from '../../helpers/filterContent';
import { taskFilter } from '../../store/taskfilter';
const Dropdown = (props) => {

    const [label,setLabel] = useState(props.label);
    const [dropdownState,setDropdownState] = useState('empty');
    const [activeItem,setActiveItem] = useState('');
    const [sss,setasss] = useState();
    const addFilterParam = (param,label) => {
        if(Array.isArray(changeLabel(label)) === true){
            changeLabel(label).push(param);
        }
        else {
            taskFilter.filterData.query = param;
        }
    }
    const removeFilterParam = (param,label)=>{
        changeLabel(label).forEach(content =>{
            if(content === param)
            {
                let elemIndex = changeLabel(label).indexOf(content);
                changeLabel(label).splice([elemIndex],1);
            }
        })
    }

    const handleMouseEnter = () =>{
        if (dropdownState !== 'active'){
            setDropdownState('hover');
        }
    };
    const handleMouseLeave = () =>{
        if (dropdownState !== 'active'){
            setDropdownState('empty');
        }
    }
    const handleClick = () =>{ 
        (dropdownState === 'active')? setDropdownState('hover'): setDropdownState('active');
        

    }

    const handleChangeValue = (evt) =>{ 
        setDropdownState('hover');
    }

    

    return (
        <div className={`dropdown-wrapper dropdown-wrapper_${dropdownState}`}>
            <div  onChange={handleChangeValue} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}className={`dropdown dropdown_${dropdownState}`}>
                <div className={`dropdown-trigger dropdown-trigger_${dropdownState}`}>
                    {
                        props.filterData.content
                    }
                </div>
            </div>
            <div className='dropdown-items_container'>
                {   
                    props.filterData.fields.map((item)=>{
                        return <Dropdownitem 

                        parent={props.filterData} 
                        key={(label === 'title')?props.keys[props.filterData.fields.indexOf(item)]: props.filterData.fields.indexOf(item)}
                        elKey={(label === 'title')?props.keys[props.filterData.fields.indexOf(item)]: props.filterData.fields.indexOf(item)}
                        dropdownstate={dropdownState} 
                        field={item}
                        toggleVisible={handleChangeValue}
                        addFilterParam={addFilterParam}
                        removeFilterParam={removeFilterParam}
                        label={props.label}
                        itemState={'stayed'}
                        //если итем нажат, выключить все остальные. Как это сделать ? По клику на любой айтем, пройтись по всем и выключить их (если включены вообще)
                        //Потом включить тот, на который нажали. Для этого получить его ид, но передать его нужно в дпродаун

                        //Другой вариант: сначала взять айди элемента на который кликнул, записать его в дропдаун. После всем передать неактивный параметр через колбек в пропсе
                        //После этого элементу, если его айди совпадает с айди записанным в дропдаун дать активный статус, при этом должно записываться значение итема в фильтр
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Dropdown;