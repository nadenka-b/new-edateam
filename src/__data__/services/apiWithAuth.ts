import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { RootState } from '../store';
import { DataPage, User } from '../model/common';
import { authApi } from "./authApi";
import { setAccessToken, logout } from "../slices/authSlice";
import { jwtDecode } from "jwt-decode";


const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
};


const baseUrl = URLs.api.main;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// Обертка с автоматическим обновлением accessToken**
const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    let token = (api.getState() as RootState).auth.token;
    const refreshToken = localStorage.getItem("refreshToken");

    if (!token || isTokenExpired(token)) {
        if (!refreshToken) {
            api.dispatch(logout());
            window.location.href = "/";
            return { error: { status: 403, data: "Unauthorized" } };
        }

        try {
            // Запрашиваем новый accessToken через RTK Query
            const refreshResult = await api.dispatch(authApi.endpoints.accessToken.initiate({ token: refreshToken })).unwrap();

            // Сохраняем новый accessToken
            api.dispatch(setAccessToken(refreshResult.accessToken,));

            token = refreshResult.accessToken;
            // Повторяем оригинальный запрос с новым токеном

        } catch (refreshError) {
            console.error("Ошибка обновления токена", refreshError);
            api.dispatch(logout());
            window.location.href = "/";
            return { error: { status: 403, data: "Unauthorized" } };
        }

    }
    args.headers = args.headers || new Headers();
    args.headers.set("Authorization", `Bearer ${token}`);
    return await baseQuery(args, api, extraOptions);
};


export const apiWithAuth = createApi({
    reducerPath: 'apiWithAuth',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUserData: builder.query<User, { id: string }>({
            query: ({ id }) => ({
                url: `profile/userId?id=${id}`,
                method: 'GET',
            }),
        }),
        getUserFavourites: builder.query<DataPage, { page: number }>({
            query: ({ page }) => ({
                url: `profile/favourite?page=${page}&size=5`,
                method: 'GET',
            }),
        }),
        getUserRecipes: builder.query<DataPage, { page: number }>({
            query: ({ page }) => ({
                url: `profile/my-dishes?page=${page}&size=5`,
                method: 'GET',
            }),
        }),
        removeFromFavourites: builder.mutation<void, { dishId: number }>({
            query: ({ dishId }) => ({
                url: `dish/delete-favourite/${dishId}`,
                method: 'DELETE',
            }),
        })
    }),
});

export const {
    useGetUserDataQuery,
    useGetUserFavouritesQuery,
    useGetUserRecipesQuery,
    useRemoveFromFavouritesMutation
} = apiWithAuth;