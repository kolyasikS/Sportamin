import {createAction} from "@reduxjs/toolkit/src";
import {
    ADD_FILTER,
    ADD_LANGUAGE,
    CLEAR_FILTERS, REMOVE_FILTER,
    REMOVE_LANGUAGE,
    SET_RATING
} from "@/app/lib/store/constants/filterConstants";

export const setRating = createAction(SET_RATING, (rating) => {
    return {
        payload: {
            minRating: rating,
        }
    }
});
export const addLanguage = createAction(ADD_LANGUAGE, (language) => {
    return {
        payload: {
            language,
        }
    }
});
export const removeLanguage = createAction(REMOVE_LANGUAGE, (language) => {
    return {
        payload: {
            language,
        }
    }
});
export const clearFilters = createAction(CLEAR_FILTERS, () => {
    return {
        payload: {
            languages: [],
            minRating: 4.5
        }
    }
});
export const addFilter = createAction(ADD_FILTER, () => {
    return {
        payload: {
        }
    }
});
export const removeFilter = createAction(REMOVE_FILTER, () => {
    return {
        payload: {
        }
    }
});
