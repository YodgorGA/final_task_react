import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import {getTasks,getFilteredTasks} from '../api.js';

class Taskstore {
    id;
    userId;
    assignedId;
    title;
    description;
    type;
    dateOfCreation;
    dateOfUpdate;
    timeInMinutes;
    status;
    rank;

    constructor({id,userId,assignedId,title,description,type,dateOfCreation,dateOfUpdate,timeInMinutes,status,rank}) {
        makeAutoObservable(this,{},{
            autoBind:true
        });
        this.id= id;
        this.userId= userId;
        this.assignedId= assignedId;
        this.title= title;
        this.description= description;
        this.type= type;
        this.dateOfCreation= dateOfCreation;
        this.dateOfUpdate= dateOfUpdate;
        this.timeInMinutes= timeInMinutes;
        this.status= status;
        this.rank= rank;
    }
}

class TasksStore{
    data = [];
    filteredTasks = [];
    constructor() {
        makeAutoObservable(this,{},{
            autoBind:true
        });
        onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
        const response = yield getTasks();
        this.data = response.data.data.map((task) => new Taskstore(task));
    }

    *getFilteredTasks(filterParams,page,limit) {
        const response = yield getFilteredTasks(filterParams,page,limit);
        this.filteredTasks = response.data.data.map((task)=> new Taskstore(task));
    }
}

export const tasks = new TasksStore();