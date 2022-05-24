import React from 'react';
import Taskdropdown from '../../components/dropdown/taskdropdown';
import { useState } from 'react';
import { getUserName,translateTaskStatus,translateTaskRank } from '../../helpers/functions';
const Tasklistitem = (props) => {
    const [listState,setListState] = useState('hidden');
    const toggleListVisibility = ()=>{
        (listState === 'hidden')? setListState('visible') : setListState('hidden') ;
    }
    const {type,title,assignedUser,status,rank} = props.taskData;
    return (
        <div className='tasklist-item_container'>
            <div className={`tasklist-item tasklist-item_type`}>
                <div className={`tasklist-item_type__${type}`}></div>
            </div>
            <div className={`tasklist-item tasklist-item_name`}>
                {title}
                </div>
            <div className={`tasklist-item tasklist-item_user`}>
                {getUserName(assignedUser)}
                </div>
            <div className={`tasklist-item tasklist-item_status`}>
                <div className={`tasklist-item_status__${translateTaskStatus(status).color}`}>
                    {translateTaskStatus(status).content}
                </div>
            </div>
            <div className={`tasklist-item tasklist-item_priority`}>
                <div className={`tasklist-item_priority__${translateTaskRank(rank).color}`}>
                    {translateTaskRank(rank).content}
                </div>
            </div>
            <div className={`tasklist-item tasklist-item_dropdown`}>
                    <Taskdropdown state={listState} toggleFunc={toggleListVisibility}/>
            </div>
        </div>
    );
};

export default Tasklistitem;