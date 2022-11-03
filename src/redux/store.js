import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from '../redux/filterSlice';
import {contactsReducer} from '../redux/contactsSlice';


const rootReducer = combineReducers ({
    contacts: contactsReducer,
    filters: filtersReducer,   
})


export const store = configureStore({
    reducer : rootReducer,
})


