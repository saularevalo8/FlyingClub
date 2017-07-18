import {GET_USERS, GET_USER, RESET_USER} from '../actions/user_actions';

const users = (state={all:[], selected:null}, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                all: action.payload.data
            };
        case GET_USER:
            return {
                ...state,
                selected: action.payload.data
            };
        case RESET_USER:
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }

};

export default users;