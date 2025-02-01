import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { RootState } from '../store';
import { DataPage, User } from '../model/common';

const baseUrl = URLs.api.main;

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
        getUserData: builder.query<User, { id: string }>({
            query: ({ id }) => `profile/userId?id=${id}`,
        }),
        getUserFavourites: builder.query<DataPage, { page: number }>({
            query: ({ page }) => `profile/favourite?page=${page}&size=5`,
        }),
        getUserRecipes: builder.query<DataPage, { page: number }>({
            query: ({ page }) => `profile/my-dishes?page=${page}&size=5`,
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