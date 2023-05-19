import {createReducer} from "@reduxjs/toolkit";
import {setAuth, setIsSigningOut, setUser} from "@/app/lib/store/actions/authActions";

const reducer = createReducer(
    {
        isAuth: false,
        user: null,
        isSigningOut: false,
    },
    (builder) => {
        builder
            .addCase(setAuth, (state, action) => {
                state.isAuth = action.payload.isAuth;
            })
            .addCase(setUser, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(setIsSigningOut, (state, action) => {
                state.isSigningOut = action.payload.isSigningOut;
            })
    }
);
export default reducer;