import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli'

const baseUrl = getConfigValue('new-edateam.api')

const buildQueryParams = (params = {}) => {
    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (Array.isArray(value) && value.length) {
            searchParams.append(key, value.join(','));
        }
        else if (!Array.isArray(value) && value) {
            searchParams.append(key, value);
        }
    });
    return searchParams.toString();
};

export const mainApi = createApi({
    reducerPath: 'main-api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        getIngredients: builder.query({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getDishes: builder.query({
            query: ({ page, size, filters }) => {
                const queryParams = buildQueryParams(filters);
                const query = `dishes?page=${page}&size=${size}`;
                return queryParams ? `${query}&${queryParams}` : query;
            }
        }),
        getRecipeById: builder.query({
            query: ({ id }) => `recipepage-data/${id}`,
        }),
        getTags: builder.query({
            query: () => `tag`,
            keepUnusedDataFor: 60 * 60 * 12,
        }),


        getUserData: builder.query({
            query: ({ id }) => `profile/userId?id=${id}`,
        }),
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
        }),
    }),
});

export const {
    useLazyGetIngredientsQuery,
    useGetDishesQuery,
    useGetRecipeByIdQuery,
    useGetTagsQuery,
    useGetUserDataQuery,
    useGetUserFavouritesQuery,
    useGetUserRecipesQuery,
    useRemoveFromFavouritesMutation
} = mainApi;
