import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi';
import { authApi } from './services/authApi';
import { apiWithAuth } from './services/apiWithAuth'
import dishesReducer from './slices/mainDishesSlice'
import userDishesReducer from './slices/userDishesSlice'
import authReducer from './slices/authSlice'
import tagsReducer from './slices/tagsSlice'

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [apiWithAuth.reducerPath]: apiWithAuth.reducer,
        dishes: dishesReducer,
        userDishes: userDishesReducer,
        auth: authReducer,
        tags: tagsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware, authApi.middleware, apiWithAuth.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
