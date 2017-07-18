import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const RESET_USER = 'RESET_USER';

export function getUsers() {
    const request = axios.get('/api/user/all');
    return {
        type: GET_USERS,
        payload: request
    }
}

export function getUser(id) {
    const request = axios.get(`/api/user/${id}`);
    return {
        type: GET_USER,
        payload: request
    }
}

export function resetSelectedUser(){
    return {
        type: RESET_USER,
        payload: null
    }
}