import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TokenPayload } from '../model/common'
import type { RootState } from '../store'
import { jwtDecode } from 'jwt-decode';

interface AuthState {
    token: string | null;
    user: TokenPayload | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('accessToken'),
    user: localStorage.getItem('accessToken') ? jwtDecode<TokenPayload>(localStorage.getItem('accessToken')!) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, accessToken, refreshToken } }: PayloadAction<{ user: TokenPayload; accessToken: string, refreshToken: string }>,
        ) => {
            state.user = user;
            state.token = accessToken;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
        },
        setAccessToken: (state, { payload: accessToken }: PayloadAction<string>) => {
            state.token = accessToken;
            localStorage.setItem("accessToken", accessToken);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },
});

export const { setCredentials, setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user
