import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli';
import { RootState } from '../store';

const baseUrl = getConfigValue('new-edateam.api');

const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token || localStorage.getItem('accessToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiWithAuth = createApi({
    reducerPath: 'apiWithAuth',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getUserFavourites: builder.query({
            query: ({ page, size }) => `profile/favourite?page=${page}&size=${size}`,
        }),
        getUserRecipes: builder.query({
            query: ({ page, size }) => `profile/my-dishes?page=${page}&size=${size}`,
        }),
        removeFromFavourites: builder.mutation({
            query: ({ dishId }) => ({
                url: `dish/delete-favourite/${dishId}`,
                method: 'DELETE',
            }),
        })
    }),
});

export const {
    useGetUserFavouritesQuery,
    useGetUserRecipesQuery,
    useRemoveFromFavouritesMutation
} = apiWithAuth;