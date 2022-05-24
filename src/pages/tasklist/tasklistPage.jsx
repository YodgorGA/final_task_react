import React from 'react';
import { observer } from 'mobx-react-lite';
import {useState} from 'react';
import Cardheader from '../../components/cardheader/cardheader';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import Dropdown from '../../components/dropdown/dropdown';
import Tasklistitem from '../../components/tasklistitem/tasklistitem';
import {getFilterContent,getTaskKeys} from '../../helpers/filterContent.js';
import {tasks} from '../../store/tasks.js';
import {taskFilter} from '../../store/taskfilter';
import {getFilteredTasks} from '../../api.js';

const TasklistPage = observer(() => {
    const {type,title,user,status,rank} = getFilterContent();
    const [pageNumber,setPageNumber] = useState('0');
    const test = () =>{
        console.log(taskFilter.filterData);
        // tasks.taskFilter.map(item=>{return console.log(item)});
        applyTaskFilter();
    }
    const applyTaskFilter = (filterData)=>{
        const some = getFilteredTasks(taskFilter.filterData,0,7).then(result=>{console.log(result.data)});
    }
    
    return (
        <div className='tasklist-page_wrapper'>
        <Header/>
            <div className='tasklist-wrapper'>
                <Cardheader/>
                <div className='tasklist-body'>
                    <div className='tasklist-filter'>
                        <div className='tasklist-filter_type'><Dropdown label={'type'} keys={getTaskKeys()} filterData={type}/></div>
                        <div className='tasklist-filter_title'><Dropdown label={'title'} keys={getTaskKeys()} filterData={title}/></div>
                        <div className='tasklist-filter_user'><Dropdown label={'user'} keys={getTaskKeys()} filterData={user}/></div>
                        <div className='tasklist-filter_status'><Dropdown label={'status'} keys={getTaskKeys()} filterData={status}/></div>
                        <div className='tasklist-filter_priority'><Dropdown label={'rank'} keys={getTaskKeys()} filterData={rank}/></div>
                        <Button onClick={test} parent='tasklist-filter'color='primary' content='Применить'/>
                    </div>
                    <div className='tasklist-items_container'>
                        {tasks.data.map((task)=>{return <Tasklistitem key={task.id} taskData={{type:task.type,title:task.title,assignedUser:task.assignedId,status:task.status,rank:task.rank}}/>})}
                    </div>
                    <div className='tasklist-pagination'>
                        <div className='tasklist-pagination_left'>
            
                        </div>
                        <div className='tasklist-pagination_right'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TasklistPage;