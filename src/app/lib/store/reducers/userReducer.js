import {createReducer} from "@reduxjs/toolkit";
import {setTrainers} from "@/app/lib/store/actions/userActions";

const reducer = createReducer(
    {
        trainers: null,
    },
    (builder) => {
        builder
            .addCase(setTrainers, (state, action) => {
                state.trainers = action.payload.trainers;
            })
    }
);
export default reducer;