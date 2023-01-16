import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
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
// export const register = async data => {
//     const { data: result } = await axios.post('/users/signup', data);
//     // setToken(result.token);
//     return result;
// };