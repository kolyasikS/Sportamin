import {createReducer} from "@reduxjs/toolkit";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";

const reducer = createReducer(
    {
        isLoading: false,
    },
    (builder) => {
        builder
            .addCase(setIsLoading, (state, action) => {
                state.isLoading = action.payload.isLoading;
            })
    }
);

export default reducer;