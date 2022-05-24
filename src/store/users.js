import {computed, makeAutoObservable, onBecomeObserved } from "mobx";
import {getUsers} from '../api.js';

class UserStore{
    id;
    username;
    login;
    about;
    photoUrl;

    constructor ({id,username,login,about,photoUrl}){
        makeAutoObservable(this,{},{
            autoBind:true
        });
        this.id=id;
        this.username=username;
        this.login=login;
        this.about=about;
        this.photoUrl=photoUrl;
    }
}

class UsersStore{
    data = [];
    constructor(){
        makeAutoObservable(this,{},{
            autoBind:true
        });
        onBecomeObserved(this, 'data', this.fetch);
    }

    *fetch() {
        const response = yield getUsers();
        this.data = response.data.map((user) => new UserStore(user));
    }
}

export const users = new UsersStore();