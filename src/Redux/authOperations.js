import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { useSelector } from 'react-redux';
import { getUserToken } from './phonebookSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setToken = token => {
    if (token) {
        return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
    }
    axios.defaults.headers.common.authorization = '';
};
export const register = createAsyncThunk('auth/register', async data => {
    try {
        const { data: result } = await axios.post('/users/signup', data);
        setToken(result.token);
        return result;
    } catch (error) {
        console.log(error);
    }
})
export const login = createAsyncThunk('auth/login', async data => {
    try {
        const { data: result } = await axios.post('/users/login', data);
        setToken(result.token);
        return result;
    } catch (error) {
        console.log(error);
    }
})
export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await axios.post('/users/logout');
        setToken();
        return data;
    } catch (error) {
        console.log(error);
    }
})
export const fetchRefresh = createAsyncThunk('auth/refresh', async (token) => {
    if (token === null) return;
    setToken(token);
    try {
        const { data } = await axios.get('/users/current')
        return data;
    } catch (error) {
        console.log(error)
    }
})
