import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi';
import dishesReducer from './slices/dishesSlice'

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        dishes: dishesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
