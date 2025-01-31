import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi';
import dishesReducer from './slices/mainDishesSlice'
import userDishesReducer from './slices/userDishesSlice'

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        dishes: dishesReducer,
        userDishes: userDishesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
