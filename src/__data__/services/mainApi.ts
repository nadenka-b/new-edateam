import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli'

const baseUrl = getConfigValue('new-edateam.api')

export const mainApi = createApi({
    reducerPath: 'main-api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, }),
    endpoints: (builder) => ({
        getIngredients: builder.query({
            query: ({ value }) => `/ingredient/unique-titles/start-with?value=${value}`,
        }),
        getDishes: builder.query({
            query: ({ page, size }) => `dishes${page}&${size}`,
        }),

    }),
});

export const { useLazyGetIngredientsQuery, useLazyGetDishesQuery, useGetDishesQuery } = mainApi; // Хук для запроса данных
