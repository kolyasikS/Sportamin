import {createAction} from "@reduxjs/toolkit/src";
import {SET_IS_LOADING} from "@/app/lib/store/constants/sessionConstants";

export const setIsLoading = createAction(SET_IS_LOADING, (bool) => {
    return {
        payload: {
            isLoading: bool,
        }
    }
});
