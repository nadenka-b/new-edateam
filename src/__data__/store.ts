import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi'; // Импортируем базовый API
import dishesReducer from './slices/dishesSlice'

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer, // Регистрируем базовый API
        dishes: dishesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware), // Middleware для RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
