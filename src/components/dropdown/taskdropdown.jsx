import React from 'react';

const Taskdropdown = (props) => {
    return (
        <div className='taskdropdown-container'>
            <div className='taskdropdown-icon_container'>
                <div onClick={props.toggleFunc} className='taskdropdown-icon'>
                    <img className='taskdropdown-icon_img' src='./menuicon/Icon.svg' alt='menu'/>
                </div>
            </div>
            <div className={`taskdropdown-list taskdropdown-list_${props.state}`}>
                <div className='taskdropdown-item'>Редактировать</div>
                <div className='taskdropdown-item taskdropdown-item_delete'>Удалить</div>
                <div className='taskdropdown-item'>На тестирование</div>
                <div className='taskdropdown-item'>Переоткрыть</div>
            </div>
        </div>
    );
};

export default Taskdropdown;