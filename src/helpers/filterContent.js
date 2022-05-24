import {tasks} from '../store/tasks.js';
import {users} from '../store/users.js';
import {getUserName} from './functions.js';
import { taskFilter } from '../store/taskfilter.js';

const getFilterContent = () =>{
    let taksNames = tasks.data.map((task)=>{return task.title});
    let userNames = users.data.map((user)=>{return getUserName(user.id)}); 

    const filterContent = {
        type: {
            content: 'Тип',
            fields: ['Task','Bug']
        },
        title: {
            content: 'Название задачи',
            fields: taksNames,
        },
        user: {
            content: 'Пользователь',
            fields: userNames
        },
        status: {
            content: 'Статус',
            fields: ['Открыто','В работе','Тестирование','Завершено']
        },
        rank: {
            content: 'Приоритет',
            fields: ['Высокий','Средний','Низкий']
        },
    }

    return filterContent;
}

const getTaskKeys = ()=>{
    let taskKeys = tasks.data.map((task)=>{return task.id}); 
    return taskKeys;
}

const changeLabel = (label) =>{
    switch (label){
        case 'type':
        return taskFilter.filterData.type;
        case 'title':
        return taskFilter.filterData.query;
        case 'user':
        return taskFilter.filterData.assignedUsers;
        case 'status':
        return taskFilter.filterData.status;
        case 'rank':
        return taskFilter.filterData.rank;
        default:
        break;
    }

}

export {getFilterContent,changeLabel,getTaskKeys};