import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli'
import { FileType } from '../model/common';

const baseUrl = getConfigValue('new-edateam.api');
const imagesUrl = getConfigValue('new-edateam.images');

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
        getDishes: builder.query({
            query: ({ page, size, filters }) => {
                const queryParams = buildQueryParams(filters);
                const query = `dish/dishes?page=${page}&size=${size}`;
                return queryParams ? `${query}&${queryParams}` : query;
            }
        }),
        getImage: builder.query({
            query: ({ path }) => ({
                url: `${imagesUrl}${path}`,
                method: 'GET',
                responseType: 'blob',
            }),
            keepUnusedDataFor: 60 * 10,
        }),
        getIngredients: builder.query({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getTags: builder.query<FileType[], void>({
            query: () => `tag`,
            keepUnusedDataFor: 60 * 60 * 12,
        }),
        getRecipeById: builder.query({
            query: ({ id }) => `recipepage-data/${id}`,
        }),
        getUserData: builder.query({
            query: ({ id }) => `profile/userId?id=${id}`,
        }),
    }),
});

export const {
    useGetDishesQuery,
    useGetImageQuery,
    useLazyGetIngredientsQuery,
    useGetTagsQuery,
    useGetUserDataQuery,
    useGetRecipeByIdQuery
} = mainApi;
