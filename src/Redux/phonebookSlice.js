

import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './phonebookOperations';
import { register } from './authOperations';
const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    auth: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false
    },
    filter: ''
}

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        setFilterValue: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.auth.isLoggedIn = true;
            state.auth.user = action.payload.user;
            state.auth.token = action.payload.token;
        },
        [fetchContacts.pending]: (state) => {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload
        },
        [fetchContacts.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
        [addContact.pending]: (state) => {
            state.contacts.isLoading = true;
        },
        [addContact.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = [...state.contacts.items, action.payload]
        },
        [addContact.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
        [deleteContact.pending]: (state) => {
            state.contacts.isLoading = true;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.id)
        },
        [deleteContact.rejected]: (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },


    },
})
export const { setFilterValue } = phonebookSlice.actions;


export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts.items;
export const getErrror = state => state.phonebook.contacts.error;
export const getLoading = state => state.phonebook.contacts.isLoading;
export const getUserToken = state => state.phonebook.auth.token;
export const getIsLoggedIn = state => state.phonebook.auth.isLoggedIn;
