import {SET_AUTH, SET_USER} from "@/app/lib/store/constants/authConstants";
import {createAction} from "@reduxjs/toolkit/src";

export const setAuth = createAction(SET_AUTH, (bool) => {
    return {
        payload: {
            isAuth: bool,
        }
    }
});
export const setUser = createAction(SET_USER, (user) => {
    return {
        payload: {
            user,
        }
    }
});
