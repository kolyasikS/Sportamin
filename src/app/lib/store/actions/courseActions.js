import {createAction} from "@reduxjs/toolkit";
import {
    SET_DAYS, SET_EXERCISES,
    SET_GENERAL_INFORMATION, SET_PROVIDED_ITEMS,
    SET_PROVIDING_ITEMS,
    SET_REQUIREMENTS,
    SET_STATUS, SET_WEEKS
} from "@/app/lib/store/constants/courseConstants";

export const setStatus = createAction(SET_STATUS, (status) => {
    return {
        payload: {
            status,
        }
    }
});
export const setGeneralInformation = createAction(SET_GENERAL_INFORMATION, (generalInformation) => {
    return {
        payload: {
            generalInformation,
        }
    }
});
export const setRequirements = createAction(SET_REQUIREMENTS, (requirements) => {
    return {
        payload: {
            requirements,
        }
    }
});
export const setProvidedItems = createAction(SET_PROVIDED_ITEMS, (providingItems) => {
    return {
        payload: {
            providingItems,
        }
    }
});
export const setWeeks = createAction(SET_WEEKS, (weeks) => {
   return {
       payload: {
           weeks,
       }
   }
});
export const setDays = createAction(SET_DAYS, (days) => {
   return {
       payload: {
           days,
       }
   }
});
export const setExercises = createAction(SET_EXERCISES, (exercises) => {
   return {
       payload: {
           exercises,
       }
   }
});