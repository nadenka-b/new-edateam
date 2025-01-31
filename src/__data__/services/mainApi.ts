// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // export const mainApi = createApi({
// //     reducerPath: 'main-api',
// //     baseQuery: fetchBaseQuery({
// //         baseUrl: 'http://localhost:5000/', // Задай базовый URL для запросов
// //     }),
// //     endpoints: (builder) => ({
// //         getRecipes: builder.query<{ title: string; id: string }[], void>({
// //             query: () => `/recipes`,
// //             transformResponse: (response: { success: boolean; body: any[] }) => {
// //                 if (response.success === true) {
// //                     return response.body
// //                 } else {
// //                     return void 0
// //                 }
// //             },
// //             providesTags: ["Recipe"],
// //         })
// //     })
// // });

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getConfigValue } from '@brojs/cli';

// const baseUrl = getConfigValue('new-edateam.api');

// export const mainApi = createApi({
//     reducerPath: 'mainApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getDishes: builder.query({
//             query: ({ page, size }) => `dish/dishes?page=${page}&size=${size}`,
//         }),
//         getRecipe: builder.query({
//             query: (id) => `/recipes/${id}`,
//             providesTags: (result, error, id) => [{ type: "Recipe", id }],
//         }),
//     }),
// });

// export const { useGetDishesQuery, useGetRecipeQuery } = mainApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@brojs/cli'


// Получаем baseUrl из конфигурации
const baseUrl = getConfigValue('new-edateam.api');

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({
     baseUrl: '' 
    // baseUrl: '/stubs/json/recipepage-data/' // Указываем путь до JSON
    // baseUrl: 'http://localhost:8099'
  }),
  endpoints: (builder) => ({
    getRecipeById: builder.query({
      query: (id) => `/stubs/json/recipepage-data/${id}`,  // Используем параметр id для запроса
    }),
  }),
});

export const { useGetRecipeByIdQuery } = mainApi;
