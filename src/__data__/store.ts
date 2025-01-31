import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi'; // Импортируем базовый API
// import dishesReducer from './slices/dishesSlice'
import recipeReducer from './slices/recipeSlice';

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer, // Регистрируем базовый API
        // dishes: dishesReducer,
        recipe: recipeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware), // Middleware для RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from '@reduxjs/toolkit';
// import { mainApi } from './service/main-api';

// export const store = configureStore({
//     reducer: {
//         [mainApi.reducerPath]: mainApi.reducer, // Регистрируем RTK Query API
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(mainApi.middleware), // Добавляем middleware для API
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
