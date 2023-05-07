import {createReducer} from "@reduxjs/toolkit";
import {
    addFilter,
    addLanguage,
    clearFilters,
    removeFilter,
    removeLanguage, setAmountPages, setIsFetching, setPage, setRange,
    setRating, setStatus
} from "@/app/lib/store/actions/filterActions";
import {itemsPerPage, statuses} from "@/app/lib/store/constants/generalConstants";

const reducer = createReducer(
    {
        minRating: 4.5,
        languages: [],
        amountFilters: 1,
        price: {
            min: null,
            max: null
        },
        status: statuses.CREATING,
        page: 1,
        amountPages: 0,
    },
    (builder) => {
        builder
            .addCase(setRating, (state, action) => {
                state.minRating = action.payload.minRating;
            })
            .addCase(addLanguage, (state, action) => {
                if (!state.languages.length) {
                    state.amountFilters++;
                }
                state.languages.push(action.payload.language);
            })
            .addCase(removeLanguage, (state, action) => {
                state.languages = state.languages.filter(language => language !== action.payload.language);
                if (!state.languages.length) {
                    state.amountFilters--;
                }
            })
            .addCase(clearFilters, (state, action) => {
                state.languages = action.payload.languages;
                state.minRating = action.payload.minRating;
                state.amountFilters = 1;
            })
            .addCase(addFilter, (state, action) => {
                state.amountFilters++;
            })
            .addCase(removeFilter, (state, action) => {
                state.amountFilters--;
            })
            .addCase(setRange, (state, action) => {
                state.price = action.payload.range;
            })
            .addCase(setStatus, (state, action) => {
               state.status = action.payload.status;
            })
            .addCase(setPage, (state, action) => {
               state.page = action.payload.page;
            })
            .addCase(setAmountPages, (state, action) => {
               state.amountPages = Math.ceil(action.payload.amount / itemsPerPage);
            });
    }
);
export default reducer;