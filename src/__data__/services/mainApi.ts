import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli'

const baseUrl = getConfigValue('new-edateam.api')

export const mainApi = createApi({
    reducerPath: 'main-api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, }),
    endpoints: (builder) => ({
        getDishes: builder.query({
            query: ({ page, size }) => `dish/dishes?page=${page}&size=${size}`, // Параметры запроса
        }),
    }),
});

export const { useGetDishesQuery } = mainApi; // Хук для запроса данных
