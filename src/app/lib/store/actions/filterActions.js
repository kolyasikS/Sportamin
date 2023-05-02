import {createAction} from "@reduxjs/toolkit";
import {
    ADD_FILTER,
    ADD_LANGUAGE,
    CLEAR_FILTERS, REMOVE_FILTER,
    REMOVE_LANGUAGE, SET_STATUS, SET_RANGE,
    SET_RATING, SET_PAGE, SET_AMOUNT_PAGES
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
export const setRange = createAction(SET_RANGE, (range) => {
    return {
        payload: {
            range
        }
    }
});
export const setStatus = createAction(SET_STATUS, (status) => {
    return {
        payload: {
            status
        }
    }
});
export const setPage = createAction(SET_PAGE, (page) => {
    return {
        payload: {
            page
        }
    }
});
export const setAmountPages = createAction(SET_AMOUNT_PAGES, (amount) => {
    return {
        payload: {
            amount
        }
    }
});
