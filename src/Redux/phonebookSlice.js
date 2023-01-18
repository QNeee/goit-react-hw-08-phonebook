

import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './phonebookOperations';
import { fetchRefresh, login, logOut } from './authOperations';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const initialState = {
    contacts: {
        items: [],
    },
    auth: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
    },
    isLoading: false,
    refreshed: false,
    error: null,
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
        [login.fulfilled]: (state, action) => {
            state.auth.user = action.payload.user;
            state.auth.token = action.payload.token;
            state.auth.isLoggedIn = true;
        },
        [logOut.fulfilled]: (state) => {
            state.auth.user = { name: null, email: null }
            state.auth.token = null;
            state.auth.isLoggedIn = false;
        },
        [fetchRefresh.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchRefresh.fulfilled]: (state, action) => {

            state.isLoading = false;
            // state.auth.user = action.payload;
        },
        [fetchRefresh.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.auth.user = { name: null, email: null }
        },
        [fetchContacts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending]: (state) => {
            state.isLoading = true;
        },
        [addContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts.items = [...state.contacts.items, action.payload]
        },
        [addContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.id)
        },
        [deleteContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },


    },
})
export const { setFilterValue } = phonebookSlice.actions;
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: ['auth']
}
export const persistedPhonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer)
export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts.items;
export const getErrror = state => state.phonebook.error;
export const getLoading = state => state.phonebook.isLoading;
export const getUserToken = state => state.phonebook.auth.token;
export const getIsLoggedIn = state => state.phonebook.auth.isLoggedIn;
export const getUserEmail = state => state.phonebook.auth.user.email;
export const getUser = state => state.phonebook.auth.user;
