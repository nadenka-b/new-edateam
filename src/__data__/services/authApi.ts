import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { RootState } from '../store'
import { UserResponse, LoginRequest, User } from '../model/common'
import { setCredentials } from '../slices/authSlice';
import { jwtDecode } from 'jwt-decode';

const baseUrl = URLs.api.auth;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token || localStorage.getItem("accessToken");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// Обертка для автоматического обновления токена
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // Если получили 401, пробуем обновить токен
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
            const refreshResponse = await fetch("/access", {
                method: "POST",
                body: JSON.stringify({ refreshToken }),
                headers: { "Content-Type": "application/json" },
            });

            if (refreshResponse.ok) {
                const newTokens = await refreshResponse.json();
                localStorage.setItem("accessToken", newTokens.accessToken);
                localStorage.setItem("refreshToken", newTokens.refreshToken);
                const user: User = jwtDecode(newTokens.accessToken);
                console.log(user)
                api.dispatch(setCredentials({ user: user, accessToken: newTokens.accessToken, refreshToken: newTokens.refreshToken })); // Обновляем токен в сторе

                // Повторяем запрос с обновленным токеном
                result = await baseQuery(args, api, extraOptions);
            } else {
                // Если refresh не сработал — разлогиниваем пользователя
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            }
        }
    }

    return result;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        refreshToken: builder.mutation<{ accessToken: string }, void>({
            query: (refreshToken) => ({
                url: "/access", // запрос Саше на обновление accessToken
                method: "POST",
                body: refreshToken,
            }),
        }),
    }),
});

export const { useLoginMutation, useRefreshTokenMutation } = authApi;


// {
//     token: "";
// }