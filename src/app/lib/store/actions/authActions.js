import {SET_AUTH, SET_IS_SIGNING_OUT, SET_USER} from "@/app/lib/store/constants/authConstants";
import {createAction} from "@reduxjs/toolkit";

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
export const setIsSigningOut = createAction(SET_IS_SIGNING_OUT, (isSigningOut) => {
    return {
        payload: {
            isSigningOut,
        }
    }
});
