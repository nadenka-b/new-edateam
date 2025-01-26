import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
    reducerPath: 'main-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/', // Задай базовый URL для запросов
    }),
    endpoints: () => ({}),
});
