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
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, }),
    endpoints: (builder) => ({
        getIngredients: builder.query({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getDishes: builder.query({
            query: ({ page, size, filters }) => {
                // const queryParams = buildQueryParams(filters);
                const query = `dishes${page}&${size}`;
                return query;
                // return queryParams ? `${query}&${queryParams}` : query;

            }
        }),
        getRecipeById: builder.query({
            query: ({ id }) => `recipepage-data/${id}`,

        }),
        createDish: builder.mutation({
            query: (formData) => ({
                url: '/user/create-dish',
                method: 'POST',
                body: formData, // Передаем FormData
            }),
        }),
    }),
});

export const { useLazyGetIngredientsQuery, useGetDishesQuery, useGetRecipeByIdQuery, useCreateDishMutation } = mainApi;
