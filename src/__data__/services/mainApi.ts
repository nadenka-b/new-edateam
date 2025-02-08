import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { AllIngredients, DataPage, FileType, Filters } from '../model/common';
import { RootState } from '../store';

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
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getDishes: builder.query<DataPage, { page: number, size: number, filters: Filters }>({
            query: ({ page, size, filters }) => {
                const queryParams = buildQueryParams(filters);
                const query = `dish/dishes?page=${page}&size=${size}`;
                return queryParams ? `${query}&${queryParams}` : query;
            }
        }),
        getUniqueIngredients: builder.query<DataPage, { value: string }>({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getIngredients: builder.query<AllIngredients, { title: string }>({
            query: ({ title }) => `/ingredient/filtered-by?title=${title}`,
        }),
        getTags: builder.query<FileType[], void>({
            query: () => `tag`,
            keepUnusedDataFor: 60 * 60 * 12,
        }),
        getRecipeById: builder.query({
            query: ({ id }) => `dish/page?id=${id}`,
        }),
        registration: builder.mutation({
            query: (formData: FormData) => ({
                url: '/profile',
                method: 'POST',
                body: formData,
            }),

        })
    }),
});

export const {
    useLazyGetUniqueIngredientsQuery,
    useLazyGetIngredientsQuery,
    useGetDishesQuery,
    useGetRecipeByIdQuery,
    useGetTagsQuery,
    useRegistrationMutation
} = mainApi;