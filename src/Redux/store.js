import { configureStore } from '@reduxjs/toolkit'
import { persistedPhonebookReducer } from "./phonebookSlice";
import { persistStore } from 'redux-persist'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
export const store = configureStore({
    reducer: {
        phonebook: persistedPhonebookReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)