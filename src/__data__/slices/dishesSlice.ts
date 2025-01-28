import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DishesState {
    currentPage: number;
    pageSize: number;
}

const initialState: DishesState = {
    currentPage: 0, // Начальная страница
    pageSize: 3,
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
    },
});

export const { setCurrentPage, setPageSize } = dishesSlice.actions;

export default dishesSlice.reducer;