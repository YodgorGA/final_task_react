import {makeAutoObservable} from "mobx";

class TaskFilter {
    filterData;

    constructor(filterData) {
        makeAutoObservable(this,{},{
            autoBind:true
        });
        this.filterData = filterData = {
            type: [],
            query: undefined,
            assignedUsers: [],
            status: [],
            rank:[],
        }
    }
}

export const taskFilter = new TaskFilter();