import React from 'react';
import Button from '../button/button';
const Cardheader = () => {
    return (
        <div className='cardheader-wrapper'>
            <div className='cardheader_left-side'><h1>Задачи</h1></div>
            <div className='cardheader_right-side'>
                <Button color='primary' content='Добавить задачу'/>
            </div>
        </div>
    );
};

export default Cardheader;