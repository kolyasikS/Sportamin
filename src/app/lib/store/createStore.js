import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import authReducer from "@/app/lib/store/reducers/authReducer";
import userReducer from "@/app/lib/store/reducers/userReducer";
import sessionReducer from '@/app/lib/store/reducers/sessionReducer';
import filterReducer from '@/app/lib/store/reducers/filterReducer';

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    sessionReducer,
    filterReducer
});
export function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ // for DEV
            immutableCheck: false,                                              // for DEV
            serializableCheck: false                                            // for DEV
        })
    });

    return store;
}

export default (preloadedState) => createWrapper(() => configureAppStore(preloadedState));

