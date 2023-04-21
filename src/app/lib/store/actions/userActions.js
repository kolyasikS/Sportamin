import {createAction} from "@reduxjs/toolkit/src";
import {SET_TRAINERS} from "@/app/lib/store/constants/userConstants";

export const setTrainers = createAction(SET_TRAINERS, (trainers) => {
    return {
        payload: {
            trainers
        }
    }
});
