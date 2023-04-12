import {createReducer} from "@reduxjs/toolkit/src";
import {
    addFilter,
    addLanguage,
    clearFilters,
    removeFilter,
    removeLanguage,
    setRating
} from "@/app/lib/store/actions/filterActions";

const reducer = createReducer(
    {
        minRating: 4.5,
        languages: [],
        amountFilters: 1,
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
    }
);
export default reducer;