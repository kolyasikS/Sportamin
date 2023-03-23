import {createReducer} from "@reduxjs/toolkit/src";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";

const reducer = createReducer(
    {
        isAuth: false,
        user: null
    },
    (builder) => {
        builder
            .addCase(setAuth, (state, action) => {
                state.isAuth = action.payload.isAuth;
            })
            .addCase(setUser, (state, action) => {
                state.user = action.payload.user;
            })
    }
);
export default reducer;