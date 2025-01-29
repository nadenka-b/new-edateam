import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DishesState {
    currentPage: number;
    pageSize: number;
    filterIncludeIngredients: string[]; // ID ингредиентов, которые должны быть в блюде
    filterExcludeIngredients: string[]; // ID ингредиентов, которых не должно быть
    filterTag: number;
    filterCookTime: number;
}

const initialState: DishesState = {
    currentPage: 0, // Начальная страница
    pageSize: 3,
    filterIncludeIngredients: [],
    filterExcludeIngredients: [],
    filterTag: 0,
    filterCookTime: 0
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload; // Устанавливаем номер страницы
        },
        setPageSize(state, action: PayloadAction<number>) {
            state.pageSize = action.payload; // Обновляем количество элементов на странице
        },
        setIncludeIngredients: (state, action: PayloadAction<string[]>) => {
            state.filterIncludeIngredients = action.payload;
        },
        setExcludeIngredients: (state, action: PayloadAction<string[]>) => {
            state.filterExcludeIngredients = action.payload;
        },
        setTag: (state, action: PayloadAction<number>) => {
            state.filterTag = action.payload;
        },
        setCookTime: (state, action: PayloadAction<number>) => {
            state.filterCookTime = action.payload;
        },
    }
});

export const { setCurrentPage, setPageSize, setIncludeIngredients, setExcludeIngredients, setTag, setCookTime } = dishesSlice.actions;

export default dishesSlice.reducer;