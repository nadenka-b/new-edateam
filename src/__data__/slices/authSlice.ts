import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../model/common'
import type { RootState } from '../store'

interface AuthState {
    token: string | null;
    user: User | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, accessToken, refreshToken } }: PayloadAction<{ user: User; accessToken: string, refreshToken: string }>,
        ) => {
            state.user = user;
            state.token = accessToken;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user