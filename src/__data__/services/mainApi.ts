import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { DataPage, FileType, Filters } from '../model/common';

const baseUrl = URLs.api.main;

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
        getDishes: builder.query<DataPage, { page: number, size: number, filters: Filters }>({
            query: ({ page, size, filters }) => {
                const queryParams = buildQueryParams(filters);
                const query = `dish/dishes?page=${page}&size=${size}`;
                return queryParams ? `${query}&${queryParams}` : query;
            }
        }),
        getRecipeById: builder.query({
            query: ({ id }) => `dish/page?id=${id}`,
        }),
        getIngredients: builder.query<DataPage, { value: string }>({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getTags: builder.query<FileType[], void>({
            query: () => `tag`,
            keepUnusedDataFor: 60 * 60 * 12,
        })
    }),
});

export const {
    useGetDishesQuery,
    useLazyGetIngredientsQuery,
    useGetTagsQuery,
    useGetRecipeByIdQuery,
    useLazyGetRecipeByIdQuery,
} = mainApi;