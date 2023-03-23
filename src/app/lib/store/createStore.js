import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "@/app/lib/store/reducers/authReducer";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
    authReducer
});
export function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState
    });

    return store;
}

export default (preloadedState) => createWrapper(() => configureAppStore(preloadedState));

