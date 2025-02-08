import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLs } from '../urls';
import { AuthResponse, LoginRequest, AccessTokenRequest } from '../model/common'


const baseUrl = URLs.api.auth;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        accessToken: builder.mutation<AuthResponse, AccessTokenRequest>({
            query: (refreshToken) => ({
                url: "/access", // запрос Саше на обновление accessToken
                method: "POST",
                body: refreshToken,
            }),
        }),
    }),
});

export const { useLoginMutation, useAccessTokenMutation } = authApi;


// {
//     token: "";
// }


// придет с бэка на авторизацию
// {
//     "type": "string",
//     "accessToken": "string",
//     "refreshToken": "string"
//   }