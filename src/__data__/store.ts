import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi'; // Импортируем базовый API

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer, // Регистрируем базовый API
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware), // Middleware для RTK Query
});