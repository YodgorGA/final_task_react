import {users} from '../store/users.js';

const getUserName = (assignedId)=>{
    let username;
    users.data.forEach(user => {
        if(assignedId === user.id)
        {
            username = user.username;
        }
    })
    return username;
};

const translateTaskStatus = (status)=>{
    switch (status){
        case 'testing':
            return {content:'Тестирование',color:'warning'};
        case 'opened': 
            return {content: 'Открыто',color: 'default'};
        case 'complete':
            return {content:'Сделано',color: 'success'};
        case 'inProgress':
                return {content:'В работе',color: 'warning'};
        default : 
            return;
    }
}

const translateTaskRank = (rank)=>{
    switch (rank){
        case 'high':
            return {content:'Высокий',color:'high'};
        case 'medium': 
            return {content: 'Средний',color: 'medium'};
        case 'low':
            return {content:'Низкий',color: 'low'};
        default : 
            return;
    }
}

export {getUserName,translateTaskStatus,translateTaskRank};
